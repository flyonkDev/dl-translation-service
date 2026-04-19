import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import type { PaymentProvider as PaymentProviderEnum } from '@prisma/client';

import type {
  IPaymentProvider,
  CreateCheckoutParams,
  CreateCheckoutResult,
  ParsedPaymentEvent,
  WebhookAuthContext,
} from '../types/payment-provider.interface';

type GumroadWebhookPayload = Partial<{
  referrer: string;
  purchaser_email: string;
  email: string;
  product_permalink: string;
  sale_id: string;
  price: string;
  currency: string;
}>;

/**
 * Pre-configured hosted Gumroad product links, keyed by plan duration in years.
 *
 * Gumroad does NOT expose a "create checkout" API — these links are created manually
 * in the Gumroad dashboard and each corresponds to a specific SKU/price.
 */
const GUMROAD_PRODUCT_URLS: Record<number, string> = {
  1: 'https://companion5.gumroad.com/l/irwbas',
  3: 'https://companion5.gumroad.com/l/iexiii',
  5: 'https://companion5.gumroad.com/l/nprol',
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export function extractApplicationIdFromReferrer(referrer: string): string | null {
  if (!referrer) return null;
  try {
    const u = new URL(referrer);
    const parts = u.pathname.split('/').filter(Boolean);
    const idx = parts.findIndex((p) => p.toLowerCase() === 'payment');
    if (idx >= 0) {
      const candidate = parts[idx + 1];
      if (candidate && UUID_RE.test(candidate)) return candidate;
    }
    const last = parts.at(-1);
    if (last && UUID_RE.test(last)) return last;
    return null;
  } catch {
    return null;
  }
}

@Injectable()
export class GumroadProvider implements IPaymentProvider {
  readonly name: PaymentProviderEnum = 'gumroad';

  private readonly logger = new Logger(GumroadProvider.name);

  async createCheckout(params: CreateCheckoutParams): Promise<CreateCheckoutResult> {
    const base = GUMROAD_PRODUCT_URLS[params.planYears];
    if (!base) {
      throw new BadRequestException(`No Gumroad product for ${params.planYears}y plan`);
    }

    const u = new URL(base);
    u.searchParams.set('wanted', 'true');
    u.searchParams.set('quantity', '1');
    // Gumroad forwards `referrer` back in the webhook payload — we use it to
    // recover the applicationId. The webhook parser looks for `/payment/<uuid>` in the path.
    u.searchParams.set('referrer', params.returnUrl);

    return {
      redirectUrl: u.toString(),
      // Gumroad doesn't expose a checkout id upfront; sale_id is only available
      // on the webhook payload. PaymentsService handles the externalId on the webhook side.
      externalId: undefined,
    };
  }

  /**
   * Gumroad uses a query-string shared-secret token (not HMAC).
   * We keep that scheme for backwards compatibility with existing prod configuration.
   */
  verifyWebhook(ctx: WebhookAuthContext): boolean {
    const expected = (process.env.GUMROAD_WEBHOOK_TOKEN ?? '').trim();
    if (!expected) {
      // No token configured — allow (dev convenience). Log a warning.
      this.logger.warn('GUMROAD_WEBHOOK_TOKEN is not set — webhook is unauthenticated');
      return true;
    }
    const provided = ctx.query.token;
    return provided === expected;
  }

  parseEvent(body: unknown): ParsedPaymentEvent {
    const payload = (body ?? {}) as GumroadWebhookPayload;
    const referrer = String(payload.referrer ?? '').trim();
    const applicationId = extractApplicationIdFromReferrer(referrer);
    const saleId = String(payload.sale_id ?? '').trim();

    const amountCents = payload.price != null ? Number(payload.price) : undefined;
    const currency = payload.currency ? String(payload.currency).toUpperCase() : 'USD';

    return {
      externalId: saleId || `gumroad_${Date.now()}`,
      applicationId,
      // Gumroad only emits webhooks on successful purchase.
      status: 'confirmed',
      amountCents: Number.isFinite(amountCents) ? (amountCents as number) : undefined,
      currency,
      raw: payload,
    };
  }
}
