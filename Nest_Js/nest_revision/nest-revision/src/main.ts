import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';

// Entry point of nest js 

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
