import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { FaceVerificationModule } from '../face-verification/face-verification.module';
import { VerifyModule } from '../verify/verify.module';
import { ApplicationsPdfService } from './applications-pdf.service';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [VerifyModule, FaceVerificationModule, EmailModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, ApplicationsPdfService],
})
export class ApplicationsModule {}
