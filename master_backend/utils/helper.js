import { supportedMimes } from "../config/fileSystem.js";
import {v4 as uuid4} from "uuid"
import fs from "fs"
import path from "path";


// to convert bytes to MB
export const bytesToMb=(bytes)=>{
    //bytes ko Mb mai convert krr rahe hai
    return bytes/(1024*1024)
};


//to convert random uuid
export const generateRandomNum=()=>{
    //this will return us the unique names of the files
    return uuid4()
}


// file validation hogi idhar
//user kisi bhi form mai file bhejta sakta hai , of nay other which is not an image
//so we will apply custom validation


// will get size and mime 
export const imageValidator=(size,mime)=>{
    //agar 2 mb se badi file ho toh 
    if(bytesToMb(size)>2){
        return "Image size must be less than 2MB"
    }

    //what types we allow
    else if(!supportedMimes.includes(mime)){
        return "File type not supported"
    }

    //agar dono cheeze sahi hai then cool
    // agar null hai toh sab sai hai verna galti hai 
    return null;
}

//image name pass krr lo humm uska url pass krr denge
// no need to add public because it has been served with the help of static method
export const getImageUrl=(imageName)=>{
    return `${process.env.APP_URL}/images/${imageName}`
}

export const removeImage=(imageName)=>{
    const path=process.cwd()+"/public/images/"+imageName
    
    //if file exists then delete it  
    if(fs.existsSync(path)){
        fs.unlinkSync(path);
    }
}

//upload image
export const uploadImage=(image)=>{
    // Generate unique image name
    const ext = image.name.split(".").pop()?.toLowerCase();
    
    const imageName = `${generateRandomNum()}.${ext}`;
    const uploadPath = path.join(process.cwd(), "public", "images", imageName);  
    
    // Move image to /public/images

    image.mv(uploadPath, (err) => {
        if (err) return reject(err);
    });
    return imageName;  
}