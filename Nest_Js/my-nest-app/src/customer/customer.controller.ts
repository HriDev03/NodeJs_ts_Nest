import { Controller, Get, Post,Body} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor( private readonly customerService:CustomerService){}

    @Get()
    getCustomers(){
        return this.customerService.getAllCustomers()
    }

    @Post()
    addCustomer(@Body()createCustomerDto: 
    CreateCustomerDto){
        // http request mai jo data aaye ga usse validate karaya jaata hai create customer dto ki help se 
        // 
        return this.customerService.addCustomer(createCustomerDto)
    }
}
