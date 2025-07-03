import { Body, Controller ,Delete,Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./data/book.dto";

@Controller("book")
export class BookController{
    //dont need to make it as an objectas we have registered book service as a provider
    constructor(private bookService:BookService){}

    //get all books
    @Get("/findAll")
    getAllBooks():Book[]{
        return this.bookService.findAllBooks()
    }

    // jo bhi humm data de ge voh nest js book dto ke structure mai update krr dega
    @Put("/update")
    updateBook(@Body() book:Book){
        return this.bookService.updateBookService(book)
    }

    //delete book
    @Delete("/deleteBook/:id")
    deleteBook(@Param("id") bookId:string):string{
        return this.bookService.deleteBookService(bookId);
    }

    @Post("/add")
    addBook(@Body() book:Book):string{
        return this.bookService.addBookService(book)
    }



}
