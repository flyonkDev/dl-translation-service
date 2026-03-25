import { Module } from '@nestjs/common';
import { ResendEmailService } from './resend-email.service';
import { EmailController } from './email.controller';

@Module({
  controllers: [EmailController],
  providers: [ResendEmailService],
  exports: [ResendEmailService],
})
export class EmailModule {}

