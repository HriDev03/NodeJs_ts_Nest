import mongoose from "mongoose";
//nano id se the package with the help of which we can create the url shortner
import { nanoid } from "nanoid";

// schema of the short url 
const shortUrlSchema= new mongoose.Schema({
    //mera pura url 
    fullUrl:{
        type:String,
        required:true
    },
    //mera short url 
    shortUrl:{
        type:String,
        required:true,
        //anything the nano id will be creating will be between 0 and 10
        default:()=>nanoid().substring(0,10),
    },
    // to track number of clicks on our short url 
    clicks:{
        type:Number,
        default:0
    }
},{
    //created at , upadated at 
    timestamps:true
})

export const urlModel=mongoose.model("shortUrl",shortUrlSchema)