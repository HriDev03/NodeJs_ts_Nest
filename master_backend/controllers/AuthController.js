import vine, { errors } from "@vinejs/vine";
import { loginSchema, registerSchema } from "../validations/authvalidations.js";
import prisma from "../DB/db.config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../config/mailer.js";
import logger from "../config/logger.js";

export class AuthController {
  static async register(req, res) {
    try {
      const body = req.body;

      // Validate data using vine
      const validator = vine.compile(registerSchema);
      const payload = await validator.validate(body);

      // Check if user already exists
      const findUser = await prisma.users.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (findUser) {
        return res.status(400).json({
          errors: {
            email: "Email already exists, use another one",
          },
        });
      }

      // Hash the password
      const salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, salt);

      // Create user
      const user = await prisma.users.create({
        data: payload,
      });

      return res.status(201).json({
        message: "User created successfully",
        user,
      });

    } catch (error) {
      console.log("the error is", error);

      if (error instanceof errors.E_VALIDATION_ERROR) {
        return res.status(400).json({ errors: error.messages });
      }

      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again.",
      });
    }
  }

  static async login(req, res) {
    try {
      const body = req.body;

      // Validate using loginSchema
      const validator = vine.compile(loginSchema);
      const payload = await validator.validate(body);

      // Find user by email
      const findUser = await prisma.users.findUnique({
        where: {
          email: payload.email,
        },
      });

      if (!findUser) {
        return res.status(400).json({
          errors: {
            email: "No user found with this email",
          },
        });
      }

      // Check if password matches
      const isPasswordValid = await bcrypt.compare(payload.password, findUser.password);
      if (!isPasswordValid) {
        return res.status(400).json({
          errors: {
            email: "Wrong password. Invalid credentials",
          },
        });
      }

      // Prepare payload for JWT
      const payloadData = {
        id: findUser.id,
        email: findUser.email,
        profile: findUser.profile,
        name: findUser.name,
      };

      const token = jwt.sign(payloadData, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });

      return res.status(200).json({
        message: "User logged in successfully",
        access_Token: `Bearer ${token}`,
      });

    } catch (error) {
      console.log("the error is", error);

      if (error instanceof errors.E_VALIDATION_ERROR) {
        return res.status(400).json({ errors: error.messages });
      }

      return res.status(500).json({
        status: 500,
        message: "Something went wrong. Please try again.",
      });
    }
  }
  
  //send  test email
  static async sendTestEmail(req,res){
    try{
      const {email}=req.query
      const payload={
        toEmail:email,
        subject:"test email",
        body:"<h1> HEY USER , TEST EMAIL FROM MASTER BACKEND</h1>"
      }

      await sendEmail(payload.toEmail,payload.subject,payload.body)
      return res.status(200).json({
        message:"Email sent sucessfully"
      })
    }catch(error){
        logger.error({type:"Email Error",body:error})
        return res.status(500).json({
          message:"Something went wrong please try again"
        })
    }
  }
  
  


}



