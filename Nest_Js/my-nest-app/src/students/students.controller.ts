import { Controller, Post, Body ,Get, Param, Put, Patch, Delete} from '@nestjs/common';

import { Student } from './students.schema';
import { StudentsService } from 'src/students/students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) {}               

    @Post()
    async addStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data);
    }

    // Getting All Students 
    @Get()
    async getAllStudents(){
        return this.studentService.getAllStudents();
    }

    //getting student by id 
    @Get(':id')
    async getStudentById(@Param('id') id:string){
        return this.studentService.getStudentById(id);
    }


    //sara data update karna ho toh
    @Put(':id')
    async updateStudent(@Param('id') id:string, @Body() data:Partial<Student>,){
        return this.studentService.updateStudent(id,data);
    }

    // when we want to partially update the data
     @Patch(':id')
    async patchStudent(@Param('id') id:string, @Body() data:Partial<Student>,){
        return this.studentService.patchStudent(id,data);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id:string){
        return this.studentService.deleteStudent(id)
    }

}
