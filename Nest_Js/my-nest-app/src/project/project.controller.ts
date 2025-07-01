import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

//setting the routes here 
// on what route it will take place 

@Controller('project')
export class ProjectController {

    //will be using our project service 
    constructor(
        private readonly service:ProjectService
    ){}

    //it'll be used to enter the ceed data into our relations
    @Post('seed')
    seedData(){
        return this.service.seed();
    }

    
    //will get the developers data
    @Get('developers')
    getDevelopers(){
        return this.service.getDevelopers()
    }

    //will get the Projects data
    @Get('projects')
    getProjects(){
        return this.service.getProjects()
    }
    
}
