import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employees, employeeSchema } from './schemas/employee.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';


@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Employees.name,schema:employeeSchema},
      {name:Profile.name,schema:ProfileSchema}
    ])
],
  providers: [EmployeesService],
  controllers: [EmployeesController]
})
export class EmployeesModule {}
