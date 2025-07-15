import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";

@Controller("book")
export class BookController{
    //hrr controller ki request ke liye ek naya intance banana padega
    // thats when DI comes to play , no need to make seperate objects 

    //book service ko inject karo idhar jo banayi hia '
    //public bookService:BookService = new BookService();
    //nest js has provided me with the object 
    constructor(private bookService:BookService){}
    
    //add book
    @Post("/add")
    addBook():string{
       return this.bookService.addBook();
    }

    //delete book
    @Delete("/delete")
    deleteBook():string{
      return this.bookService.deleteBook();
    }

    //update book
    @Put("/updateBook")
    updateBook():string{
       return this.bookService.updateBook();
    }

    // find all book
    @Get("/books")
    findBook():string{
        return this.bookService.findBook();
    }


}