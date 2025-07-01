import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Library } from './schemas/library.schema';
import { Model } from 'mongoose';

@Injectable()
export class LibraryService {
    
    constructor(
        @InjectModel(Book.name) private bookModel:Model<Book>,
        @InjectModel(Library.name) private libraryModel:Model<Library>,
    ){}

    //library ka data aur book ka data insert krr paaye ga 
    async createLibrary():Promise<Library>{

        //books create krr diya 
        const book1= await this.bookModel.create({
            title:"Hridyesh Sharma : THE AUTO-BIOGRAPHY",author:"Hri"
        })

        const book2= await this.bookModel.create({
            title:"THE NOTORIOUS",author:"conor"
        })

        const library1=new this.libraryModel({
            
            //library model ka kaam 
            name:"Central Library",

            // id ki help se link krr diya hai
            books:[ book1._id , book2._id ]
        })

        // jo library waala data hai usko mongoDB database mai save krr lo 
        return library1.save();

    }

    async getLibraries():Promise<Library[]>{
        // agar sirf find karte toh library waala data aa jaata but books ki sirf id aati unka data nahi aata issliye populate krr diya
        //konsi field ke andar populate karna hai , konsi field ke data ko 
        return this.libraryModel.find().populate('books')
    }


}
