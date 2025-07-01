import { Controller, Post , Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    //service ko idhar inject krr do 
    constructor( private readonly userService:UserService){}

    @Post()
    create(){
        return this.userService.createUser();
    }

    @Get()
    getAll(){
        return this.userService.findAll()
    }


    

} 
