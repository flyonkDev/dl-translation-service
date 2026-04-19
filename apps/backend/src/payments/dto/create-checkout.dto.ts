import { IsIn, IsString, IsUUID } from 'class-validator';
import { PaymentProvider } from '@prisma/client';

export class CreateCheckoutDto {
  @IsUUID('4')
  applicationId!: string;

  @IsString()
  @IsIn(['gumroad', 'nowpayments'] satisfies PaymentProvider[])
  provider!: PaymentProvider;
}
