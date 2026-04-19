import { Body, Controller, Post, Query, Req } from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common';
import type { Request } from 'express';

import { PaymentsService } from '../payments.service';

/**
 * Gumroad POSTs application/x-www-form-urlencoded; Nest parses it into `body`.
 * We still read query string for the shared-secret token.
 */
@Controller('payments/gumroad')
export class GumroadWebhookController {
  constructor(private readonly payments: PaymentsService) {}

  @Post('webhook')
  async webhook(
    @Req() req: RawBodyRequest<Request>,
    @Query('token') token: string | undefined,
    @Body() body: unknown,
  ) {
    return this.payments.handleWebhook(
      'gumroad',
      {
        headers: req.headers as Record<string, string | string[] | undefined>,
        rawBody: req.rawBody ?? '',
        query: { token },
      },
      body,
    );
  }
}
