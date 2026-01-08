import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { VerifyModule } from './verify/verify.module';
import { ReferenceModule } from './reference/reference.module';
import { ApplicationsModule } from './applications/applications.module';


@Module({
  imports: [VerifyModule, ReferenceModule, ApplicationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
