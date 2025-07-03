import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";

//taki humm apni aplication ko book module ke hisab se split krr de
@Module({
    imports:[],
    controllers:[BookController],
    providers:[BookService],
})

export class BookModule{}