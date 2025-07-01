import { Prop,Schema } from "@nestjs/mongoose";
/*
   
    it is used kyuki jo iske neeche class bane gii uske anadar jo properties define 
    karuga voh mongoose mai jaake unn properties ko mongo d mai fields banaye 
    isko use karna imortant hota hai , verna data nahi jaata hamare table mai 
*/
@Schema()
export class Address{
    
    // to tell properties kya rakhni hai we will use prop decorators 
    @Prop()
    street: string;
    
    @Prop()
    city: string;

}

/*
    
    we will use embedding data modelling which means related data ko 
    ek hii document mai store karo 

    jo user ka document banao ussi ke andar embedd kara do 

*/




