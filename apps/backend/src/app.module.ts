import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerifyModule } from './verify/verify.module';

@Module({
  imports: [VerifyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
