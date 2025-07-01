import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from './schemas/user.schema';

//how to register a mongoose schema 
@Module({
  //this is used to register our schema
  //schema ka naam : jo class ka naam hoga , schema konsa UserSchema 
  imports:[MongooseModule.forFeature([{name:User.name, schema:UserSchema}])],
  providers: [UserService],
  controllers:[UserController]
})
export class UserModule {}
