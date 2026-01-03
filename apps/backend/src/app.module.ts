import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VerifyModule } from './verify/verify.module';
import { ReferenceModule } from './reference/reference.module';


@Module({
  imports: [VerifyModule, ReferenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
