import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employees } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployeesService {
   
    constructor(
        @InjectModel(Employees.name) private employeesModel:Model<Employees>,
        @InjectModel(Profile.name) private profileModel:Model<Profile>,
    ){}


    async createEmployee():Promise<Employees>{
        
        //profile ka data toh store ho gaya
        const profile=await new this.profileModel({
            age:20,
            qulification:'Masters'
        }).save();

        //employee ka data bhi store karnaa hai 
        const employees=new this.employeesModel({
            name:"Hridyesh",
            //monog db mai jo id hoti hai uski field _id hoti hai 
            profile:profile._id
        })
        return employees.save();
    }

    //agar mai populate nahi use karu ga toh sirf id aaye gi related data nahi milega 
    //kaali id matt dena 
    async findAll():Promise<Employees[]>{
        return this.employeesModel.find().populate('Profile').exec();
    }



}
