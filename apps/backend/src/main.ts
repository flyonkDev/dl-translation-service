import path from 'node:path';
import fs from 'node:fs';
import { config } from 'dotenv';

const cwdEnv = path.join(process.cwd(), '.env');
const distEnv = path.join(__dirname, '..', '.env');
const envPath = fs.existsSync(cwdEnv) ? cwdEnv : distEnv;
const result = config({ path: envPath, override: true });
if (result.parsed && !process.env.AWS_ACCESS_KEY_ID) {
  const keys = Object.keys(result.parsed);
  const awsKey = keys.find((k) => k.endsWith('AWS_ACCESS_KEY_ID'));
  if (awsKey && result.parsed[awsKey]) {
    process.env.AWS_ACCESS_KEY_ID = result.parsed[awsKey];
    const secretKey = keys.find((k) => k.endsWith('AWS_SECRET_ACCESS_KEY'));
    const regionKey = keys.find((k) => k.endsWith('AWS_REGION'));
    if (secretKey) process.env.AWS_SECRET_ACCESS_KEY = result.parsed[secretKey];
    if (regionKey) process.env.AWS_REGION = result.parsed[regionKey];
  }
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  // rawBody: true exposes req.rawBody on controller handlers — required for
  // HMAC-based webhook signature verification (e.g. NOWPayments).
  const app = await NestFactory.create(AppModule, { rawBody: true })

  app.use(cookieParser())
  app.enableCors({ origin: true, credentials: true })
  app.setGlobalPrefix('api')

  await app.listen(process.env.PORT ?? 3001)
}

bootstrap();