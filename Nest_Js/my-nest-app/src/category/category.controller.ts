import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

//iss class ko as a controller treat karo 
// jab user category wale path mai get request bheje ga tabh category service mai get all categories waale function ko call karo 

@Controller('category')
export class CategoryController {
    //this line is telling nest js to do dependency injection 
    constructor(private readonly categoryService:CategoryService){}
    
    @Get()
        getAllCategories(){
            return this.categoryService.getCategories()
        }
    
}
