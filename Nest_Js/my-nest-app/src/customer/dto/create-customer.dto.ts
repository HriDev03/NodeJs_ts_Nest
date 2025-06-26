// DATA TRANSFER OBJECT

import { IsInt, IsString } from "class-validator";

//jo client side se data aa raha hai usse validate karo
export class CreateCustomerDto{

    @IsString()// yeh run time pe remove nahi hoga
    name:string;

    @IsInt()
    age:number;

}

//rules define krr diye hai , achived security using dto
//validate karega ki jo frontend se data aa raha hai usmai sirf name aur age hona chahiye
