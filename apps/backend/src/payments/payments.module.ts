import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module';
import { EmailModule } from '../email/email.module';
import { ApplicationsPdfService } from '../applications/applications-pdf.service';
import { ReferenceModule } from '../reference/reference.module';

import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { GumroadProvider } from './providers/gumroad.provider';
import { GumroadWebhookController } from './providers/gumroad-webhook.controller';
import { NowPaymentsProvider } from './providers/nowpayments.provider';
import { NowPaymentsWebhookController } from './providers/nowpayments-webhook.controller';

@Module({
  imports: [PrismaModule, EmailModule, ReferenceModule],
  controllers: [
    PaymentsController,
    GumroadWebhookController,
    NowPaymentsWebhookController,
  ],
  providers: [
    PaymentsService,
    GumroadProvider,
    NowPaymentsProvider,
    ApplicationsPdfService,
  ],
})
export class PaymentsModule {}
