import { Controller, Post,Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService:EmployeesService ){}

    @Post()
    create(){
        return this.employeesService.createEmployee();
    }

    @Get()
    getAll(){
        return this.employeesService.findAll();
    }


}
