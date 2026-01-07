import { Module } from '@nestjs/common';
import { VerifyController } from './verify.controller';
import { VerifyService } from './verify.service';
import { VerificationStore } from './verify.store';


@Module({
  controllers: [VerifyController],
  providers: [VerifyService, VerificationStore]
})
export class VerifyModule {}
