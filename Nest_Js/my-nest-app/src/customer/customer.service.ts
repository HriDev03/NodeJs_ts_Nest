import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    //array of type customers
    private customers:Customer[]=[];

    getAllCustomers():Customer[]{
        return this.customers;
    }

    //jab client side se data aaye ka toh validate karo
    //pehle jo frontend se name aur age aa raha hai , usko pehle validate kiya
    addCustomer(CreateCustomerDto:CreateCustomerDto):
    Customer{
            const newCustomer:Customer={
                id:Date.now(),
                //fir new customer object ke andar daal do 
                ...CreateCustomerDto,
            }
            this.customers.push(newCustomer);
            // will also return the new created customer
            return newCustomer;
    }

}
