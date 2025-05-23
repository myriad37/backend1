import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // enable CORS if you want to connect with front-end easily
  await app.listen(4000);
  console.log('Server running on http://localhost:4000');
}
bootstrap();
