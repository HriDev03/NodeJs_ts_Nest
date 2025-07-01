import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './students.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {
    constructor(
        //iska kaam hota hai toh inject the schema so we can work on it 
        @InjectModel(Student.name) private studentModel :
        Model<StudentDocument>
    ){}

    async createStudent(data: Partial<Student>):Promise<Student>{ 
        // jo data diya hai uss se naya student bana liya
        const newStudent =new this.studentModel(data)
        //nye data ko mongo db mai store kara diya hai ji 
        return newStudent.save();
    
    }

    //jab tak yeh kaam karne mai time lagega tabh tak ke liye baki kaam chalte rahege
    async getAllStudents():Promise<Student[]>{
        //doc mai jaao aur data ko fetch karo 
        //promise ko sahi se handle karna hai 
        return this.studentModel.find().exec();
    }

    //finding by id 

    //null because : jisse search krr rahe ho voh database mai exist hii nahi karta 

    async getStudentById(id:string):Promise<Student| null>{
        return this.studentModel.findById(id).exec();
    }

    //PUT MAI COMPLETE DATA KO UPDATE KARO , PATCH MAI PARTIALLY UPDATE KARO 

    // put ka kaam hota hai data ko completel change karna completely change karna
    //when we want to completely modify our data
    async updateStudent(id:string,data:Partial<Student>):Promise<Student|null>{
        const updated=await this.studentModel.findByIdAndUpdate(id,{
            name:data.name?? null,
            age:data.age?? null,
            emil:data.emil?? null,
        },{overwrite:true,new:true})
        return updated;
    }

    //when we want to partially modify the data 
    // agar sirf name  mila hai toh age aur email ko same rakhna baki update krr dena

    async patchStudent(id:string , data:Partial<Student>):Promise<Student|null>{
        return this.studentModel.findByIdAndUpdate(id,data,{new:true}).exec();
    }

    // will either show null or will show that which student has een deleted
    async deleteStudent(id:string):Promise<Student|null>{
        // promises execute ho jaaye ge 
        return this.studentModel.findByIdAndDelete(id).exec();
    }

}
