import { Schema , SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document , Types } from "mongoose";

@Schema({timestamps:true})
//these classes are extending document because they can be converted into a document
export class Developer extends Document{
    @Prop({required:true})
    name:string;

    //voh developer kin projects pe kaam krr raha hia unn projects ka naam
    @Prop({type:[{type:Types.ObjectId,ref:'Project'}]})
    //yaha prr projects ki id aa rahi hogi 
    projects:Types.ObjectId

}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);