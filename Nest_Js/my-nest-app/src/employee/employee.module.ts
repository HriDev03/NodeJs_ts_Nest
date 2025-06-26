import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {

}


/*
    Iss feature se related jo bhi controllers honge jo bhi 
    services ho jo bhi proiders ho , those all will be managed here 

    ek feature ka ek hii module uske andar hii services bane gi 
    aur uske andar hii controller aaye ga , so saara code ek feature se 
    realted ek hii jagah collected hoga

    When ever you create a new module make sure it is automatically imported in the 
    app.modules.ts file
*/