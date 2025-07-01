//schema factory iss liye taki humm apne apni class ko ek schema bana sake 
import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";

//document iss liye taki humm apni class ko ek dcument mai convert krr sake 
import { Document } from "mongoose";

//import iss liye karaya so that we can embedd it 
import { Address } from "./address.schema";

//this class is inheriting document because we want to convert this class into a document
//mongo db mai ek document bane user ke naam se 
@Schema()
export class User extends Document{
    @Prop()
    name:string;

    // yeh voh wala address hai jo humne pehle define kiya hai 
    //iss address ke andar ek obect aaye ga , jiske andar street aur city aaye ga 
    //address related data is present hoga , this is embedding 
    @Prop({type:Address})
    address:Address

}

//refrencing mai dono ke liye alag alag document bannta 
// but embedding mai ek hii document ke andar hii embedd kara diya 

export const UserSchema=SchemaFactory.createForClass(User);
