import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import cors from 'cors';

const expressApp = express();

// Konfigurasi CORS dari environment variable
const getCorsOrigins = (): string[] => {
  const defaultOrigins = ['http://localhost:5173', 'http://localhost:3000', 'https://pt-rekayasa.vercel.app'];
  const envOrigins = process.env.CORS_ORIGINS;
  
  if (envOrigins) {
    return envOrigins.split(',').map(origin => origin.trim());
  }
  
  return defaultOrigins;
};

expressApp.use(cors({
  origin: getCorsOrigins(),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
}));

let initialized = false;

async function bootstrap() {
  if (initialized) return;
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.setGlobalPrefix('api');
  await app.init();
  initialized = true;
}

// Local development: jalankan server Express
if (!process.env.VERCEL) {
  bootstrap().then(() => {
    expressApp.listen(process.env.PORT ?? 5000, () => {
      console.log(`Application is running on: http://localhost:${process.env.PORT ?? 5000}`);
    });
  });
}

// Vercel serverless: export handler yang await bootstrap dulu
export default async function handler(req, res) {
  await bootstrap();
  expressApp(req, res);
}