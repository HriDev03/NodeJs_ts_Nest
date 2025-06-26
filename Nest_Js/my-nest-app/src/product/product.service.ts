import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private  products = [
        {id:1,name:"Mobile",price:20000},
        {id:2,name:"Tablet",price:40000},
        {id:3,name:"Laptop",price:80000},
    ];
    // Method to fetch all out products
    getAllProducts(){
        return this.products;
    }

    //uumse id le ga , aur voh product return karega
    //voh product dedo jaha id match krr rahi hai 
    getProductById(id:number){
        return this.products.find((product)=>
            product.id===id)
    }
}
