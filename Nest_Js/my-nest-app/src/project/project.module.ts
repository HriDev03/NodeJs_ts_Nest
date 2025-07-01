import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './schemas/developer.schema';
import { Project, ProjectSchema } from './schemas/project.schema';

@Module({

  imports:[
    MongooseModule.forFeature([
      //makeing the use of all the schemas here as we will insert the data into it 
      {name:Developer.name,schema:DeveloperSchema},
      {name:Project.name,schema:ProjectSchema},
    ])
  ],

  //which controllers , routes to follow
  controllers: [ProjectController],
  // will the business logic for our project will be stored here
  providers: [ProjectService]

})
export class ProjectModule {}
