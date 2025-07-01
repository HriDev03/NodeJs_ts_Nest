import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Student, StudentSchema } from './students.schema';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
    imports:[
        //schema ko register karo mongoose module ke saath 
        // yeh hamara database create karega on our atlas , haare schema ko follow karte hue
        //mongoose module ko bataya hai ki monogo db atlas pe ek student name se schema banana hai aur uska structure student schema jaisa hoga 
        MongooseModule.forFeature([
            { name: Student.name, schema: StudentSchema }
        ])

    ],
    providers: [StudentsService],
    controllers: [StudentsController]
})
export class StudentsModule {}
