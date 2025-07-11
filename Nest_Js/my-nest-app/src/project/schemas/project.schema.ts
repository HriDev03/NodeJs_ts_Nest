import { Schema , SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document , Types } from "mongoose";

@Schema({timestamps:true})
//these classes are extending document because they can be converted into a document
export class Project extends Document{

    @Prop({required:true})
    //title of the project
    title:string;

    //voh developer kin projects pe kaam krr raha hia unn projects ka naam
    @Prop({type:[{type:Types.ObjectId,ref:'Developer'}]})
    //yaha prr projects ki id aa rahi hogi 
    developers:Types.ObjectId
    // foreign key connection for devs with projects
}

export const ProjectSchema = SchemaFactory.createForClass(Project);