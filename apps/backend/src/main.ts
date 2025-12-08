import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser())
  app.enableCors({ origin: true, credentials: true })
  app.setGlobalPrefix('api') // => /api/verify/license
  await app.listen(3000)
}
bootstrap()