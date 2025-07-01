import { Injectable } from '@nestjs/common';
// because we want to inject our model 
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

//model ka naam hai User.name
//user model ke naam se instance banaya hai , Model hamara user ke naam se hai
// yeh jo humne model banaya hai user ke naam se  , iska ek instance aa gaya hai userModel ke naam se 
// now if we want to insert any value we can use it using 

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel:Model<User>){}

    //creating a user 
    async createUser():Promise<User>{
        const user = new this.userModel({
            name:'Hridyesh Sharma',
            address:{
                street:'Plot 99, Padma Shree',
                city:'Hydrabad'
            }
        })
        //data insert ho gaya 
        return user.save()
    }

    //finding all users
    async findAll():Promise <User[]>{
        return this.userModel.find();
    }



}
