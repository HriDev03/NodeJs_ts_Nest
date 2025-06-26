import { Controller , Get , Param, UseGuards} from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('product')
export class ProductController {
    // constructor ka use karo aur service ko inject krr do productService variable ke saath

    constructor(private readonly productService:
        ProductService){}
        //controller ke andarservices inject ho chuki hai 

        //jab product product route pe aake get request hit karega 
        @Get()
        @UseGuards(AuthGuard)
        getProducts(){
            return this.productService.getAllProducts()
        }

        // ek dynamic id aaye gi yaha toh get products by id 
        // URL mai jo bhi value aati hai voh string type ki hoti hai 
        @Get(':id')
        getProduct(@Param('id') id:string){
            // jab method ke andar id paas karoge toh as a number pass karna
            return this.productService.getProductById(Number(id))
    }
}
