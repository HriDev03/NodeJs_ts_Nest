import nodemailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config();
export const transporter=nodemailer.createTransport({  
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS,
    },

});

export const sendEmail=async(toMail,subject,body)=>{
    const info =await transporter.sendMail({
        //sender ka address
        from:process.env.FROM_EMAIL,
        //receiver ka address
        to:toMail,
        //subject of email that we are sending
        subject:subject,
        // html body mail ki 
        html:body
    })
}