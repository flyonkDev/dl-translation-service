import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from '../prisma/prisma.module';
import { VerifyModule } from './verify/verify.module';
import { ReferenceModule } from './reference/reference.module';
import { ApplicationsModule } from './applications/applications.module';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [PrismaModule, VerifyModule, ReferenceModule, ApplicationsModule, PaymentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
