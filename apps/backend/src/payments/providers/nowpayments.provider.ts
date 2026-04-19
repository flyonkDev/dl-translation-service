import * as crypto from 'node:crypto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import type { PaymentProvider as PaymentProviderEnum } from '@prisma/client';

import type {
  IPaymentProvider,
  CreateCheckoutParams,
  CreateCheckoutResult,
  ParsedPaymentEvent,
  ParsedPaymentStatus,
  WebhookAuthContext,
} from '../types/payment-provider.interface';

type NowPaymentsInvoiceResponse = {
  id: number | string;
  order_id?: string;
  order_description?: string;
  price_amount?: number | string;
  price_currency?: string;
  pay_currency?: string;
  invoice_url: string;
  success_url?: string;
  cancel_url?: string;
  ipn_callback_url?: string;
  created_at?: string;
  updated_at?: string;
};

type NowPaymentsWebhookPayload = Partial<{
  payment_id: number | string;
  invoice_id: number | string;
  payment_status: string;
  pay_address: string;
  price_amount: number | string;
  price_currency: string;
  pay_amount: number | string;
  actually_paid: number | string;
  pay_currency: string;
  order_id: string;
  order_description: string;
  purchase_id: number | string;
  outcome_amount: number | string;
  outcome_currency: string;
}>;

/**
 * NOWPayments IPN signature — HMAC-SHA512 of the JSON body with keys sorted
 * alphabetically (deep sort), keyed with the IPN secret.
 *
 * See: https://documenter.getpostman.com/view/7907941/S1a32n38#6c88b16f-3c56-4b4f-9e6f-7b8bb4c2fa4a
 */
export function sortObjectKeysDeep(input: unknown): unknown {
  if (Array.isArray(input)) return input.map(sortObjectKeysDeep);
  if (input && typeof input === 'object') {
    const out: Record<string, unknown> = {};
    const keys = Object.keys(input as Record<string, unknown>).sort();
    for (const k of keys) {
      out[k] = sortObjectKeysDeep((input as Record<string, unknown>)[k]);
    }
    return out;
  }
  return input;
}

export function computeNowPaymentsSignature(rawBody: string, ipnSecret: string): string {
  const parsed = JSON.parse(rawBody) as unknown;
  const sorted = sortObjectKeysDeep(parsed);
  const canonical = JSON.stringify(sorted);
  return crypto.createHmac('sha512', ipnSecret).update(canonical).digest('hex');
}

function mapPaymentStatus(raw: string | undefined): ParsedPaymentStatus {
  switch ((raw ?? '').toLowerCase()) {
    case 'finished':
    case 'confirmed':
    case 'sending':
      return 'confirmed';
    case 'failed':
    case 'refunded':
      return 'failed';
    case 'expired':
      return 'expired';
    case 'waiting':
    case 'confirming':
    case 'partially_paid':
    default:
      return 'pending';
  }
}

function pickHeader(
  headers: Record<string, string | string[] | undefined>,
  name: string,
): string | undefined {
  const needle = name.toLowerCase();
  for (const [k, v] of Object.entries(headers)) {
    if (k.toLowerCase() === needle) {
      if (Array.isArray(v)) return v[0];
      return v;
    }
  }
  return undefined;
}

@Injectable()
export class NowPaymentsProvider implements IPaymentProvider {
  readonly name: PaymentProviderEnum = 'nowpayments';
  private readonly logger = new Logger(NowPaymentsProvider.name);

  private get apiKey(): string | undefined {
    return process.env.NOWPAYMENTS_API_KEY?.trim() || undefined;
  }

  private get ipnSecret(): string | undefined {
    return process.env.NOWPAYMENTS_IPN_SECRET?.trim() || undefined;
  }

  private get baseUrl(): string {
    const isSandbox =
      process.env.NOWPAYMENTS_SANDBOX === '1' || process.env.NOWPAYMENTS_SANDBOX === 'true';
    return isSandbox ? 'https://api-sandbox.nowpayments.io/v1' : 'https://api.nowpayments.io/v1';
  }

  private get payCurrency(): string | undefined {
    // If unset, NOWPayments lets the user pick any supported coin at checkout.
    return process.env.NOWPAYMENTS_PAY_CURRENCY?.trim() || undefined;
  }

  async createCheckout(params: CreateCheckoutParams): Promise<CreateCheckoutResult> {
    if (!this.apiKey) {
      throw new InternalServerErrorException('NOWPayments is not configured (NOWPAYMENTS_API_KEY missing)');
    }

    const body: Record<string, unknown> = {
      price_amount: params.priceCents / 100,
      price_currency: params.currency.toLowerCase(),
      order_id: params.application.id,
      order_description: `IDP Companion — ${params.planYears}Y Plan`,
      ipn_callback_url: params.ipnCallbackUrl,
      success_url: `${params.returnUrl}?paid=1`,
      cancel_url: `${params.returnUrl}?cancelled=1`,
      is_fixed_rate: true,
    };
    if (this.payCurrency) body.pay_currency = this.payCurrency;

    let response: Response;
    try {
      response = await fetch(`${this.baseUrl}/invoice`, {
        method: 'POST',
        headers: {
          'x-api-key': this.apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } catch (e) {
      this.logger.error('NOWPayments network error creating invoice', e as Error);
      throw new InternalServerErrorException('NOWPayments network error');
    }

    const text = await response.text();
    if (!response.ok) {
      this.logger.error(`NOWPayments invoice failed ${response.status}: ${text.slice(0, 500)}`);
      throw new InternalServerErrorException(`NOWPayments invoice failed (${response.status})`);
    }

    let invoice: NowPaymentsInvoiceResponse;
    try {
      invoice = JSON.parse(text) as NowPaymentsInvoiceResponse;
    } catch {
      throw new InternalServerErrorException('NOWPayments returned invalid JSON');
    }

    if (!invoice?.invoice_url || invoice?.id == null) {
      throw new InternalServerErrorException('NOWPayments invoice response missing id/invoice_url');
    }

    return {
      redirectUrl: invoice.invoice_url,
      externalId: String(invoice.id),
    };
  }

  verifyWebhook(ctx: WebhookAuthContext): boolean {
    const secret = this.ipnSecret;
    if (!secret) {
      this.logger.error('NOWPAYMENTS_IPN_SECRET is not set — rejecting webhook');
      return false;
    }

    const sig = pickHeader(ctx.headers, 'x-nowpayments-sig');
    if (!sig) {
      this.logger.warn('NOWPayments webhook missing x-nowpayments-sig header');
      return false;
    }

    const rawBody = typeof ctx.rawBody === 'string' ? ctx.rawBody : ctx.rawBody.toString('utf8');
    if (!rawBody) {
      this.logger.warn('NOWPayments webhook has empty raw body');
      return false;
    }

    let expected: string;
    try {
      expected = computeNowPaymentsSignature(rawBody, secret);
    } catch (e) {
      this.logger.warn(`NOWPayments webhook signature computation failed: ${(e as Error).message}`);
      return false;
    }

    const a = Buffer.from(sig, 'utf8');
    const b = Buffer.from(expected, 'utf8');
    if (a.length !== b.length) return false;
    return crypto.timingSafeEqual(a, b);
  }

  parseEvent(body: unknown): ParsedPaymentEvent {
    const payload = (body ?? {}) as NowPaymentsWebhookPayload;

    const externalId = payload.invoice_id != null ? String(payload.invoice_id) : String(payload.payment_id ?? '');
    if (!externalId) {
      throw new BadRequestException('NOWPayments webhook missing invoice_id / payment_id');
    }

    const status = mapPaymentStatus(payload.payment_status);

    const priceAmount = payload.price_amount != null ? Number(payload.price_amount) : undefined;
    const amountCents =
      priceAmount != null && Number.isFinite(priceAmount) ? Math.round(priceAmount * 100) : undefined;

    const currency = payload.price_currency ? String(payload.price_currency).toUpperCase() : undefined;
    const applicationId = payload.order_id ? String(payload.order_id) : null;

    return {
      externalId,
      applicationId,
      status,
      amountCents,
      currency,
      raw: payload,
    };
  }
}
