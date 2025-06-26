import { Injectable } from '@nestjs/common';

// Iss class ko nest js dependency injection ka use karte hue inject krr sakta hai 
//yeh class dependent hogi  
@Injectable()
export class CategoryService {
    getCategories(){
        return ["Mobile","Laptop","Tablet"]
    }
}
