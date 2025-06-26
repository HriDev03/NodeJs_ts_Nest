import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';

//global middleware lagana hai 

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, MynameController,ExceptionController, DatabaseController],
  providers: [AppService, ProductService, DatabaseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //kon sa middeware kinn routes pe apply karna hai 
    //saare routes prr middleware laga do 
    //jab frontend se kisi bhi route ko access karne ki request aaye gi toh iss middleware ko use krr do 
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
