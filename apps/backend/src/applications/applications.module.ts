import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { FaceVerificationModule } from '../face-verification/face-verification.module';
import { VerifyModule } from '../verify/verify.module';
import { ApplicationsPdfService } from './applications-pdf.service';

@Module({
  imports: [VerifyModule, FaceVerificationModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, ApplicationsPdfService],
})
export class ApplicationsModule {}
