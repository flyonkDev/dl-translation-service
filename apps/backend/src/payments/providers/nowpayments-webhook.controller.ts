import { Body, Controller, Post, Req } from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';

import { PaymentsService } from '../payments.service';

@Controller('payments/nowpayments')
export class NowPaymentsWebhookController {
  constructor(private readonly payments: PaymentsService) {}

  @Post('webhook')
  async webhook(@Req() req: RawBodyRequest<Request>, @Body() body: unknown) {
    return this.payments.handleWebhook(
      'nowpayments',
      {
        headers: req.headers as Record<string, string | string[] | undefined>,
        rawBody: req.rawBody ?? '',
        query: {},
      },
      body,
    );
  }
}
