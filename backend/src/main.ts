import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import cors from 'cors';

const expressApp = express();

// Konfigurasi CORS dari environment variable
const getCorsOrigins = (): string[] => {
  const defaultOrigins = ['http://localhost:5173', 'http://localhost:3000'];
  const envOrigins = process.env.CORS_ORIGINS;
  
  if (envOrigins) {
    // Parse dari env variable (comma-separated)
    return envOrigins.split(',').map(origin => origin.trim());
  }
  
  return defaultOrigins;
};

// Pasang CORS langsung di Express SEBELUM NestJS init
expressApp.use(cors({
  origin: getCorsOrigins(),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
}));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
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