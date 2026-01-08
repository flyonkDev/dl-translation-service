import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { ApplicationsStore } from './applications.store';
import { VerifyModule } from '../verify/verify.module';

@Module({
  imports: [VerifyModule],
  controllers: [ApplicationsController],
  providers: [ApplicationsService, ApplicationsStore],
})
export class ApplicationsModule {}
