import { Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
    
    constructor(
        private readonly service:ProjectService
    ){}

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
