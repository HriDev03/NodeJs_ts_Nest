import { Controller, Get } from '@nestjs/common';

//yeh hai decorator : telling us its a controller ( a special function ) and not a commmon function
//controller ka base route kyaa hai  
@Controller('user')
export class UserController {
    // this is our get decorator telling ki yeh ek get request ke liye logic hoga 
    // yeh tabh call hoga jab 'user' route pe get request aaye gi  
    // client jab iss route pe aaye ga tabh execute karna 
    // jab user ROUTE pe get request aaye gi tabh iss function ko runn karna 
    @Get()
    getUser(){
        return 'User data fetched sucessfully!!';
    }



}
