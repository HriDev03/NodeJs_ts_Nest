import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) 
    private productModel:Model<Product>){}

    async createProduct():Promise<Product>{
        
        const product=new this.productModel({
            title:"MacBook M2",

            // ek product mai and uske bohot saare tags hai 
            //embedding tags in a single document
            tags:[
                {name:'laptop'},
                {name:'electronics'},
                {name:'Apple'}
            ]

        })

        return product.save();
    }

    //getting all products
    async getAllProducts():Promise<Product[]>{
        return this.productModel.find();
    }
    

}
