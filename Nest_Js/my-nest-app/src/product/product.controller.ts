import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor( private readonly productService:ProductService){}

    @Post()
    create(){
        return this.productService.createProduct();
    }

    
    //hamare products data base mai find karke mill jaaye ge 
    @Get()
    getAll(){
        return this.productService.getAllProducts()
    }
}
