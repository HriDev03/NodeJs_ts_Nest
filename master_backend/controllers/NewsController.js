import vine, { errors } from "@vinejs/vine";
import { newsSchema } from "../validations/newsValidation.js";
import { generateRandomNum, imageValidator, removeImage, uploadImage } from "../utils/helper.js";
import prisma from "../DB/db.config.js";
import path from "path";
import NewsApiTransform from "../transform/newsApiTransform.js";
import { ADDRGETNETWORKPARAMS } from "dns";

export class NewsController {
  // TO SEE ALL NEWS 
  
  static async index(req, res) {
    //Applying pagination
    //page , limit (ek page pai kitne items)
    //querry se get karege
    const page= Number(req.query.page) || 1
    const limit=Number(req.query.limit )|| 2

    //if page is set to 0 or less
    if(page<=0){
      page=1;
    }

    //if limit is set to 0 or 100 then set it back to 2
    if(limit<=0 || limit>=100){
      limit=2;
    }

    //offset : kitne record lene hai aur kitne skip karne hai 
    const skip=(page-1)*limit// 1:kuch skip nahi karna hai 

    const news=await prisma.news.findMany({
      take:limit,
      skip:skip,
      include:{
        // jo cheeze chahiye sifr ussi ko pick karo , api fast 
        user:{
          select:{
            id:true,
            name:true,
            profile:true
          }
        }
      }
    })
    
    // to see image url instead of image name and other fields will have diff name like heading etc...
    const newsTransform=news.map((item)=>NewsApiTransform.transform(item))
    console.log(newsTransform);

    //will give us the total count of the news in our news db
    const totalNews=await prisma.news.count();
    
    //to get total number of pages
    const totalPages=Math.ceil(totalNews/limit)

    return res.status(200).json({status:200,news:newsTransform,metadata:{
      totalPages,
      currentPage:page,
      currentLimit:limit
    }})

  }




  // CREATING A NEW NEWS !
  static async store(req, res) {
    try {
      const user = req.user;

      if (!user || !user.id) {
        return res.status(401).json({
          status: 401,
          message: "Unauthorized. Token payload missing or invalid.",
        });
      }

      const body = req.body;
      console.log("📩 Incoming Body:", body);
      console.log("👤 Authenticated User:", user);

      // Validate news payload
      const validator = vine.compile(newsSchema);
      const payload = await validator.validate(body);
      console.log("✅ Validated Payload:", payload);

      // File validation
      if (!req.files || !req.files.image) {
        return res.status(400).json({
          errors: { image: "Image field is required" },
        });
      }

      const image = req.files.image;
      console.log("🖼️ Image Info:", image);

      // Validate image size/type
      const message = imageValidator(image.size, image.mimetype);
      if (message) {
        return res.status(400).json({ errors: { image: message } });
      }

      
      const imageName=uploadImage(image)

      console.log("✅ Image uploaded successfully.");

      // Add image name & user id to payload
      payload.image = imageName;
      payload.user_id = user.id;

      console.log("🛠️ Final Payload for DB insert:", payload);

      // Insert news into DB
      const news = await prisma.news.create({
        data: {
          title: payload.title,
          content: payload.content,
          image: payload.image,
          user_id: payload.user_id,
        },
      });

      return res.status(201).json({
        message: "News created successfully",
        news,
      });
    } catch (error) {
      console.log("🔥 UNHANDLED ERROR:", error);
      if (error instanceof errors.E_VALIDATION_ERROR) {
        return res.status(400).json({ errors: error.messages });
      }
      res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again.",
      });
    }
  }


  // Show a single news
  static async show(req, res) {
    try{
      const {id} =req.params

      //konsi news dikhani hai 
      const news=await prisma.news.findUnique({
      
        where:{
          id:Number(id)
        },

        include:{
          user:{
            select:{
              id:true,
              name:true,
              profile:true
            }
          }
        }

      })
    
      const transformNews=news?NewsApiTransform.transform(news):"No news for this id"
      return res.json({ status:200, news:transformNews})
    
    }catch(error){
      return res.status(500).json({
        message:"Sowethingwent wrong please try again . "
      })
    }
  }


  // Update news
  static async update(req, res) {
    
    const {id} = req.params
    
    const user=req.user
    
    const body=req.body

    const news= prisma.news.findUnique({
      where:{
        id:Number(id)
      }
    })

    // if id's are same then only they will be able to update the news
    //news ko sirf vohi update krr sakta hai jisnai news banayi hai 

    if(user.id!=news.user_id){
      return res.status(400).json({message:"UnAuthorized"})
    }

    const validator=vine.compile(newsSchema)
    const payload=validator.validate(body)

    // agar image bhi update karni ho , it is not necessary because if user wants to update only heading
    // if user wants to update the image delete the old image
    const image=req?.files?.image
    
    if(image){
     
      //check validation for new image
      const message=imageValidator(image?.size,image?.mimetype)
     
      if(message!==null){
        return res.status(400).json({
          errors:{
            image:message
          }
        })

      }

      //NEW IMAGE KO UPLOAD KARNA HAI 
      // Generate unique image name
      const imageName=uploadImage(image)
      //upload the new image
      payload.image=imageName

      // if image is validated then  Delete the  Old Image
      removeImage(news.image)
    }



    await prisma.news.update({

      //uss data se update krr do jo payload mai aa raha hai
      data:payload,
      
      where:{
        id:Number(id)
      }

    })
    return res.status(200).json({
      message:"News Updated Sucessfully"
    })

  }

  // Delete news
  static async destroy(req, res) {
    try{
          const {id}=req.params
          //private route hai , the person who is authenticated will be able to delete the post
          const user=req.user
          
          //finding the news to be deleted
          const news=await prisma.findUnique({
            where:{
              id:Number(id)
            }
          })
                  
          //user is not authorised to delete
          if(user.id!=news.user.id){
            return res.status(401).json({
              message:"UnAuthorized"
            })
          }

          //deleting image from fileSystem
          removeImage(news.image)

          //deleting the post from db
          await prisma.news.delete({
            where:{
              id:Number(id)
            }
          })
                            
          return res.json({
            status:200,
            message:"News Deleted Sucessfully"
          })

    }catch(error){
      return res.status(500).json({
        status:500,
        message:"Something went wrong try again "
      })
    }
  }
}
