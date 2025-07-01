import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Developer } from './schemas/developer.schema';
import { Model } from 'mongoose';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectService {

    constructor(
        @InjectModel(Developer.name) private developerModel:Model<Developer>,
        @InjectModel(Project.name) private projectModel:Model<Project>
    ){}

    // yeh do developers ka data return karega 
    async seed():Promise<{dev1:Developer;dev2:Developer}>{
        
        const [projectA,projectB] = await Promise.all([
            this.projectModel.create({title:'TEXAS MUTUAL'}),
            this.projectModel.create({title:'X'})
        ]);

        const[dev1, dev2] = await Promise.all([
           
            this.developerModel.create({
                name:"Hridy",
                //jinn projects mai kaam krr raha hai voh aa jaayege 
                projects:[projectA._id,projectB._id],
            }),
           
            this.developerModel.create({
                name:"Hridyesh",
                //jinn projects mai kaam krr raha hai voh aa jaayege 
                projects:[projectA._id],
            })
        ])
        /*
            many to many impliment karna hai 
            projects ke andar bhi developers ki detail honi chahiye 
            aur developers ke andar bhi project ki details honi chahiye

        */
       await Promise.all([

            this.projectModel.findByIdAndUpdate

            //project A mai developers ko add krr rahe hai 
            (projectA._id,{
                $set:{developers:[dev1._id,dev2._id]}
            }),
            
            // project B mai developer ko add krr rahe hai 
            (projectB._id,{
                $set:{developers:[dev1._id]}
            }),
       ])
       return {dev1,dev2}
    }

    async getDevelopers():Promise<Developer[]>{
        //developers ke andar project ka data bhi batana hai 
        // monhodb ke built in methods ko clean krr do 
        // when we need to read data we can use it    
        return this.developerModel.find().populate('projects').lean();
    }

    async getProjects():Promise<Project[]>{
        //projects ke andar developers ka data bhi batana hai 
        // monhodb ke built in methods ko clean krr do 
        // when we need to read data we can use it    
        return this.projectModel.find().populate('developers').lean();
    }
}

