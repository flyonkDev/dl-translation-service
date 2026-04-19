import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';

import { PaymentsService } from './payments.service';
import { CreateCheckoutDto } from './dto/create-checkout.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly payments: PaymentsService) {}

  @Post('checkout')
  @UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
  async checkout(@Body() dto: CreateCheckoutDto) {
    const result = await this.payments.createCheckout({
      applicationId: dto.applicationId,
      provider: dto.provider,
    });
    return {
      paymentId: result.paymentId,
      redirectUrl: result.redirectUrl,
      provider: result.provider,
    };
  }
}
