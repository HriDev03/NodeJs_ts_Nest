import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Profile extends Document{
    
    @Prop()
    age:number;
    
    @Prop()
    qulification:string;

}

export const ProfileSchema=SchemaFactory.
createForClass(Profile);


