import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BookController } from './app.controller';
import { BookService } from './book.service';

//modulers banane ke baad unhe import bhi karna hota hai according to application structure
@Module({
  imports: [UsersModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[],
})
export class RootModule {
  constructor(){
    console.log('Root Module');
  }
}
