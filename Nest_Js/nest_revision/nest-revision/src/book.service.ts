import { Injectable } from "@nestjs/common"

//iss class ka instance nest js paas hoga and then we can share it 
//we can use it throughout the application 
@Injectable()
//iss class ka instance hrr jagah chahiye 
export class BookService{
    
    addBook():string{
        return "This will add a book "
    }

    updateBook():string{
        return "This will update a book"
    }

    deleteBook():string{
        return "this will delete our book"
    }

    findBook(){
        return "This will find all the books "
    }

}