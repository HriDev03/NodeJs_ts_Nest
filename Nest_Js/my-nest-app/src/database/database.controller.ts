import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { json } from 'stream/consumers';

@Controller('database')
export class DatabaseController {
    constructor(private readonly databseService:DatabaseService){}

    @Get('status')
    getStatus(){

        return {
            status: this.databseService.getStatus(),
        }

    }
}
