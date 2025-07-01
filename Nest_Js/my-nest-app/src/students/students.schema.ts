import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
//mongo db mai jo bhi data hota hai voh document ki form mai hota hai
// key value pair ki form mai , json mai store hota hia 
import {Document} from "mongoose";

//yeh jo type banegi yeh ek toh student class aur ek document ki help se bane gi 
export type StudentDocument=Student &Document;

//jab bhi koi data insert hoga toh 2 fields apne aap insert honge created at and updated at 
@Schema({timestamps:true})
export class Student{

    //konsi properties ko required rakhna hai , aur kosi properties ko optional rakhna hai 
    @Prop({required:true})
    name:string;

    @Prop({required:true})
    age:number;

    //yeh optional hai , agar email nahi banayi toh document bana lena
    @Prop({})
    emil?:string;

}

// iss schema ko mongo db kai schema mai convert krr rahe hai 
export const  StudentSchema=SchemaFactory.createForClass(Student)
