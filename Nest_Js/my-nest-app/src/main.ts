import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //YEH HAI HAMARI VALIDATION PIPE
  //Abb humne apni app pe puri global validation laga di hai 
  app.useGlobalPipes(new ValidationPipe({
    // unn properties ko remove krr dega jo dto mai define nahi kiya
    whitelist:true,
    forbidNonWhitelisted:true//will give an error message
  }))


  // lifecycle methods cant work on our own 
  // we need to check the nest js for it 


  // telling app to enable this ending life cycle method
  app.enableShutdownHooks()

  await app.listen(process.env.PORT ?? 3000);

  
}
bootstrap();
