/*
    Ek tag ke multiple products ho sakte hai but , 
    but ek product ko multiple tags nahi hoo skipPartiallyEmittedExpressions

*/

// we will be using embeddin data modelling technique 
//taag is related to product toh , tag ka ek document bana lenge usse product mai embedd krr lenge
import { Prop,Schema } from "@nestjs/mongoose";

@Schema()
export class Tag{
    
    @Prop()
    name:string;

}

