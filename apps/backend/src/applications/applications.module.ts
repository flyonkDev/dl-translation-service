import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { ApplicationsStore } from './applications.store';
import { VerifyModule } from '../verify/verify.module';
import { ApplicationsPdfService } from './applications-pdf.service';


@Module({
  imports: [VerifyModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, ApplicationsStore, ApplicationsPdfService],
})
export class ApplicationsModule {}
