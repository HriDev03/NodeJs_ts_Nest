
import express, { urlencoded } from "express"

import "dotenv/config"

//importing routes
import  ApiRoutes from "./routes/api.js"

//FIE UPLOAD KE PACKAGE KO FETCH KARO
import fileUpload from "express-fileupload"
import helmet from "helmet";
import cors from "cors";
import { limiter } from "./config/ratelimiter.js";


const app=express()

const PORT=process.env.PORT||3000

//middlewares
app.use(express.json())
app.use(urlencoded({extended:false}))

// jo bhi deta hamari public directory mai hai usse serve krr sakte ho 
//agar koi file hai public dir mai usse serve krr do ki loog usse access krr paaye
app.use(express.static("public"))

// Given the power to express js to upload the file
app.use(fileUpload())
app.use(helmet())
//jo bhi kahi bhi apna frontend chala raha ho waha se api access ho jaaye
app.use(cors())
app.use(limiter)

//mounting routes
app.use("/api",ApiRoutes)

app.get("/",(req,res)=>{
    return res.json({message:"Server is working"});
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})