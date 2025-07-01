import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Tag } from "./tag.schema";

@Schema()
export class Product extends Document{
    @Prop()
    title:string;

    //tags ko embedd karna hai
    @Prop({type:[Tag]})
    tags:Tag[]
}

export const ProductSchema=SchemaFactory.createForClass(Product);
