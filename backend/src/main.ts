import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors();
  app.setGlobalPrefix('api');
  
  if (process.env.VERCEL) {
    await app.init();
  } else {
    await app.listen(process.env.PORT ?? 5000);
    console.log(`Application is running on: http://localhost:${process.env.PORT ?? 5000}`);
  }
}

bootstrap();

export default expressApp;
