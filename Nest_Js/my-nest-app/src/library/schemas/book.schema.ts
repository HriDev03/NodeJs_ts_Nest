import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Book extends Document{
    @Prop()
    title:string;

    @Prop()
    author:string;
}

// since we are using refrencing now , we need to convert the schema to the document
export const BookSchema=SchemaFactory.createForClass(Book);



