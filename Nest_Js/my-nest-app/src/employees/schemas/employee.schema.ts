//yaha prr jo nest js mai mongoose ke package mai jo schema hota hai uska use krr raha hu 
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";

// yaa pe mongoose ka schema use krr raha hu 
import { Document,Schema as MongooseSchema } from "mongoose";


import { Profile } from "./profile.schema";


@Schema()
export class Employees extends Document{
    
    @Prop()
    name:string;

    //abb jo property aayi gi profile waali aaye gi 
    //yaha prr iss employee ke andar , pura profile nahi aaye ga but related data ki id ko link krr denge 
    @Prop({type: MongooseSchema.Types.ObjectId , ref:'Profile'})
    profile:Profile;

}

export const employeeSchema=SchemaFactory.
createForClass(Employees);




