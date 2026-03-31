import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { EmailModule } from '../email/email.module';
import { ApplicationsPdfService } from '../applications/applications-pdf.service';
import { GumroadWebhookController } from './providers/gumroad-webhook.controller';

@Module({
  imports: [PrismaModule, EmailModule],
  controllers: [GumroadWebhookController],
  providers: [ApplicationsPdfService],
})
export class PaymentsModule {}

