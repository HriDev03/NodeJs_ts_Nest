import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
    //3000/myname/custom

    @Post('custom')
    //controller run karne se pehle custom pipe run hogi 
    transformName(@Body('name',new UppercasePipe())name:string ){
        return {message:`Received name ${name}`}
    }

}
