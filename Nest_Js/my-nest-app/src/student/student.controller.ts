import { Controller, Param,Get,Patch,Delete,Post, Body, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){};
    
    @Get()

    getAll(){
        return this.studentService.getAllStudents()
    }

    @Get(':id')
    //parameter mai se id ko nikalega , id of type string
    // bhejte time will convert id to number

    getOne(@Param('id')id:string){
        return this.studentService.getStudentById(Number(id))
    }

    //@Body decorator is used ki jab humm request ki body mai bheje ge toh kaise jana chahiye
    @Post()
    
    create(@Body() body:{name:string,age:number}){
        return this.studentService.createStudent(body)
    }


    @Put(':id')
    
    update(@Param('id') id:string, @Body() body:Partial<{name:string,age:number}>){
          return this.studentService.patchStudent(Number(id),body);
    }


    @Patch(':id')
    
    patch(@Param('id') id:string, @Body() body:{name:string,age:number}){
          return this.studentService.updateStudent(Number(id),body);
    }

    @Delete(':id')
    remove(@Param('id') id:String){
        return this.studentService.deleteStudent(Number(id))
    }

}
