import express from "express"
import {urlModel} from "../model/shortUrl"

export const createUrl=async(req:express.Request,res:express.Response)=>{
    try {
        console.log("The full Url is : ",req.body.fullUrl);
        const {fullUrl}=req.body
        const urlFound=await urlModel.find({fullUrl});
        
        if(urlFound.length>0){
            res.status(409)//conflict we already have the url;
            res.send({"message":"the url you are shortning is already shortened",urlFound})
        

        }else{
            const shortUrl= await urlModel.create({fullUrl});
            res.status(201).send(shortUrl)
        }
    }catch(error){
        res.status(500).send({"message":"Something went wrong"})
    }
}


//getting all routes
export const getAllUrl=async(req:express.Request,res:express.Response)=>{
    try {
        const shortUrls=await urlModel.find();
        if(shortUrls.length<0){
            res.status(404).send({"message":"No short Urls found"})
        }else{
            res.status(200).send(shortUrls)
        }
    }catch(error){
        res.status(500).send({"message":"Something went wrong"})
    }
}

//getting a single route , when we click on shortened route it will redirect
export const getUrl=async(req:express.Request,res:express.Response)=>{
    try {
        const shortUrl = await urlModel.findOne({shortUrl:req.params.id})
        if(!shortUrl){
            res.status(404).send({"message":"Full Url not found "})
        }else{
            //when a user will click on it , an api call will be made to the get Url 
            shortUrl.clicks++
            //save my clicks
            shortUrl.save()
            //move to the long url 
            res.redirect(`${shortUrl.fullUrl}`)
        }
    }catch(error){
        res.status(500).send({"message":"Something went wrong"})
    }
    
}

//deleting a shortened route 
export const deleteUrl=async(req:express.Request,res:express.Response)=>{
      try {
        const shortUrl = await urlModel.findByIdAndDelete({_id:req.params.id})
        if(shortUrl){
            res.status(200).send({"message":"URL Sucessfully deleted "})
        }
    }catch(error){
        res.status(500).send({"message":"Something went wrong"})
    }
    
}