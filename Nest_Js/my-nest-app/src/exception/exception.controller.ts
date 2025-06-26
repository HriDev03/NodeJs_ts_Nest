import { Controller,Param, Get, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http-exception/http-exception.filter';

@Controller('exception')
export class ExceptionController {
    @Get('hello/:id')
    //agar koi dikkat hui toh yeh filter chala dena
    @UseFilters(HttpExceptionFilter)
    getHello(@Param('id',ParseIntPipe)id:number){
            return{Message:`Hi your id is ${id}`}
    }
}
