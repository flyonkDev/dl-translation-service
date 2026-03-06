import { Module } from '@nestjs/common';
import { VerifyController } from './verify.controller';
import { VerifyService } from './verify.service';
import { VerificationStore } from './verify.store';
import { VerifyStorageService } from './verify-storage.service';

@Module({
  controllers: [VerifyController],
  providers: [VerifyStorageService, VerifyService, VerificationStore],
  exports: [VerificationStore],
})
export class VerifyModule {}
