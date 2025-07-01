import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsModule } from './students/students.module';
import { UserModule } from './user/user.module';
import { EmployeesModule } from './employees/employees.module';
import { ProductModule } from './product/product.module';
import { LibraryModule } from './library/library.module';
import { ProjectModule } from './project/project.module';

//global middleware lagana hai 
//configureModule.forRoot: apni aap pe koi bhi cheez globally apply krr sakte hai 
// puri application mai globally implement krr saku
@Module({

  // ye joh mera environment variable hai aapne iski integration karani hia meri application mai globally
  // iss mongodb_uri ki value app mai honi chahiye globally and it cant be null
  imports: [EmployeeModule, CategoryModule, 
    StudentModule, CustomerModule,
    ConfigModule.forRoot({isGlobal:true}),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    StudentsModule,
    UserModule,
    EmployeesModule,
    ProductModule,
    LibraryModule,
    ProjectModule
  ],

  controllers: [AppController, MynameController,ExceptionController, DatabaseController, EvController],
  providers: [AppService, DatabaseService, EvService],

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //kon sa middeware kinn routes pe apply karna hai 
    //saare routes prr middleware laga do 
    //jab frontend se kisi bhi route ko access karne ki request aaye gi toh iss middleware ko use krr do 
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
