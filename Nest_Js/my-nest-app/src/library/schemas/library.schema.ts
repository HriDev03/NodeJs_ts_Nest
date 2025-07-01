import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document , Types } from "mongoose"

@Schema()

export class Library extends Document{
    @Prop()
    name:string;

    //baki cheeze aaye gi book ki , ki konsi library ke andar konsi book hai 
    // id ko fetch krr do 
        
    @Prop({type:[{type:Types.ObjectId,ref:'Book'}]})
    books:Types.ObjectId[];
}
export const LibrarySchema=SchemaFactory.createForClass(Library);




