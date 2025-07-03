import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from "uuid";

// here all the business logic , data manuplation will take place
// iss service ko as a provider, as an injectable declare krr diya so that there is no need to make seperate objects now for each controller
//NestJS mein services ko providers kehte hain. Jab tum kisi module mein service ko providers array mein daalte ho
@Injectable()
export class BookService{

    //dto ke type ka ek empty array declare karo 
    //books is an array of Books
    public books:Book[]=[];
    
    //Jo jo methods karne hai unhe define karo
    // ADD BOOK
    addBookService(book:Book):string{
        //id auto generated
        //this function will auto generate uuid
        book.id=uuidv4()
        this.books.push(book);
        return "Book Added Sucessfully !"
    }

    //UPDATE BOOK
    updateBookService(book:Book):string{
        //to check the index of the book to be updated
        let index:number =  this.books.findIndex((currBook)=>{
            return currBook.id==book.id
        })

        //will be updating with new info 
        this.books[index]=book;
        return "Book has been sucessfukky Updated"
    }

    //delete book 
    deleteBookService(bookId:string):string{
        // will only return those books jinki id same nahi hai to the book we want to remove
        this.books=this.books.filter((book)=>{
            return book.id !== bookId;
        });
        return "Book has been deleted"
    }

    //finding all books
    findAllBooks():Book[]{
        return this.books;
    }



}