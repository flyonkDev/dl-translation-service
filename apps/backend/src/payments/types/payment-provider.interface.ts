import type { Application, PaymentProvider as PaymentProviderEnum } from '@prisma/client';

export interface CreateCheckoutParams {
  application: Application;
  planYears: number;
  priceCents: number;
  currency: string;
  /** Absolute URL the user should land on after payment / cancel. */
  returnUrl: string;
  /** Absolute URL the provider should call for webhooks (if needed by this provider). */
  ipnCallbackUrl: string;
}

export interface CreateCheckoutResult {
  /** Where to redirect the user to pay. */
  redirectUrl: string;
  /**
   * Provider-side reference (e.g. NOWPayments invoice.id).
   * Optional — some providers (Gumroad) don't expose one until the webhook arrives.
   */
  externalId?: string;
}

export type ParsedPaymentStatus = 'pending' | 'confirmed' | 'failed' | 'expired';

export interface ParsedPaymentEvent {
  /** Provider reference (sale_id / payment_id). Required for idempotency. */
  externalId: string;
  /** Our Application.id. Extracted from referrer / order_id depending on provider. */
  applicationId: string | null;
  /** Normalized status for writing to Payment.status + gating Application.status flip. */
  status: ParsedPaymentStatus;
  amountCents?: number;
  currency?: string;
  raw: unknown;
}

export interface WebhookAuthContext {
  headers: Record<string, string | string[] | undefined>;
  /** Raw (pre-parse) body bytes — required for HMAC schemes. */
  rawBody: Buffer | string;
  /** Query string params (for providers using query-string token auth). */
  query: Record<string, string | undefined>;
}

/**
 * Contract every payment provider must implement.
 *
 * Providers are stateless — all persistence is done by PaymentsService.
 */
export interface IPaymentProvider {
  readonly name: PaymentProviderEnum;

  /**
   * Produce a checkout redirect URL for the given application + plan.
   * For providers without an API (e.g. Gumroad), this returns the pre-configured hosted link.
   */
  createCheckout(params: CreateCheckoutParams): Promise<CreateCheckoutResult>;

  /**
   * Verify the webhook is genuine.
   * Must throw or return false for any unauthenticated / unverified request.
   */
  verifyWebhook(ctx: WebhookAuthContext): boolean;

  /**
   * Normalize a verified webhook payload into the common event shape.
   * Must NOT throw for unknown status — map to 'pending' or 'failed' instead.
   */
  parseEvent(body: unknown): ParsedPaymentEvent;
}
