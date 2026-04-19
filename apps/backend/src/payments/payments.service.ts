import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import type { Application, PaymentStatus } from '@prisma/client';
import { PaymentProvider as PaymentProviderEnum, Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';
import { ApplicationsPdfService } from '../applications/applications-pdf.service';
import { ResendEmailService } from '../email/resend-email.service';
import { buildThankYouEmail } from '../email/email.templates';
import { resolveEmailLogoDataUri } from '../email/email.branding';
import { PricingService } from '../reference/pricing/pricing.service';

import { GumroadProvider } from './providers/gumroad.provider';
import { NowPaymentsProvider } from './providers/nowpayments.provider';
import type {
  IPaymentProvider,
  ParsedPaymentEvent,
  WebhookAuthContext,
} from './types/payment-provider.interface';

/** Resend: tag values may only contain ASCII letters, numbers, underscores, dashes. */
function resendSafeTagValue(raw: string, maxLen = 128): string {
  const s = String(raw).slice(0, maxLen);
  const cleaned = s
    .replace(/[^a-zA-Z0-9_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return cleaned.length ? cleaned : 'na';
}

function envFlag(name: string): boolean {
  const v = (process.env[name] ?? '').trim().toLowerCase();
  return v === '1' || v === 'true' || v === 'yes';
}

export interface CreateCheckoutCommand {
  applicationId: string;
  provider: PaymentProviderEnum;
}

export interface CreateCheckoutResultPublic {
  paymentId: string;
  redirectUrl: string;
  provider: PaymentProviderEnum;
}

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);
  private readonly providers: Record<PaymentProviderEnum, IPaymentProvider>;

  constructor(
    private readonly prisma: PrismaService,
    private readonly pricing: PricingService,
    private readonly pdf: ApplicationsPdfService,
    private readonly email: ResendEmailService,
    gumroad: GumroadProvider,
    nowpayments: NowPaymentsProvider,
  ) {
    this.providers = {
      gumroad,
      nowpayments,
    };
  }

  private getProvider(name: PaymentProviderEnum): IPaymentProvider {
    const p = this.providers[name];
    if (!p) throw new BadRequestException(`Unknown payment provider: ${name}`);
    return p;
  }

  private get publicBaseUrl(): string {
    return (process.env.APP_PUBLIC_BASE_URL ?? 'http://localhost:3001').replace(/\/+$/, '');
  }

  private get spaPaymentReturnUrl(): string {
    // The SPA's payment page. Provider `returnUrl` gets `/:applicationId` appended.
    return (process.env.PAYMENT_RETURN_URL ?? 'http://localhost:5173/payment').replace(/\/+$/, '');
  }

  async createCheckout(cmd: CreateCheckoutCommand): Promise<CreateCheckoutResultPublic> {
    const application = await this.prisma.application.findUnique({
      where: { id: cmd.applicationId },
    });
    if (!application) throw new NotFoundException('Application not found');
    if (application.status === 'paid' || application.status === 'pdf_ready') {
      throw new BadRequestException('Application is already paid');
    }

    const provider = this.getProvider(cmd.provider);
    const plan = await this.resolvePlan(application.planYears);

    const returnUrl = `${this.spaPaymentReturnUrl}/${application.id}`;
    const ipnCallbackUrl = `${this.publicBaseUrl}/api/payments/${cmd.provider}/webhook`;

    const result = await provider.createCheckout({
      application,
      planYears: application.planYears,
      priceCents: plan.priceCents,
      currency: plan.currency,
      returnUrl,
      ipnCallbackUrl,
    });

    const payment = await this.prisma.payment.create({
      data: {
        applicationId: application.id,
        provider: cmd.provider,
        externalId: result.externalId ?? null,
        amountCents: plan.priceCents,
        currency: plan.currency,
        status: 'pending',
      },
    });

    this.logger.log(
      `checkout created provider=${cmd.provider} applicationId=${application.id} paymentId=${payment.id}`,
    );

    return {
      paymentId: payment.id,
      redirectUrl: result.redirectUrl,
      provider: cmd.provider,
    };
  }

  async handleWebhook(
    providerName: PaymentProviderEnum,
    ctx: WebhookAuthContext,
    body: unknown,
  ) {
    const provider = this.getProvider(providerName);
    if (!provider.verifyWebhook(ctx)) {
      throw new UnauthorizedException('Invalid webhook signature');
    }

    const event = provider.parseEvent(body);

    if (!event.applicationId) {
      this.logger.warn(`webhook ${providerName}: no applicationId, externalId=${event.externalId}`);
      return { ok: true, applied: false, reason: 'no_application_id' };
    }

    const application = await this.prisma.application.findUnique({
      where: { id: event.applicationId },
    });
    if (!application) {
      this.logger.warn(
        `webhook ${providerName}: application not found applicationId=${event.applicationId}`,
      );
      return { ok: true, applied: false, reason: 'application_not_found' };
    }

    await this.upsertPayment(providerName, event);

    const shouldFlipStatus =
      event.status === 'confirmed' &&
      application.status !== 'paid' &&
      application.status !== 'pdf_ready';

    if (shouldFlipStatus) {
      await this.prisma.application.update({
        where: { id: application.id },
        data: { status: 'paid' },
      });
      this.logger.log(
        `webhook ${providerName}: marked paid applicationId=${application.id} externalId=${event.externalId}`,
      );

      if (envFlag('EMAIL_SEND_ON_PAYMENT')) {
        await this.sendThankYouEmail(application, providerName, event);
      }

      return { ok: true, applied: true, emailed: envFlag('EMAIL_SEND_ON_PAYMENT') };
    }

    return { ok: true, applied: false, reason: 'status_unchanged' };
  }

  private async upsertPayment(providerName: PaymentProviderEnum, event: ParsedPaymentEvent) {
    const paymentStatus: PaymentStatus = event.status;
    const rawPayload = event.raw as Prisma.InputJsonValue;

    // (provider, externalId) is the unique key. If an earlier createCheckout already
    // created a pending row with this externalId, this updates it. For Gumroad (no checkout
    // row) this creates the row fresh.
    await this.prisma.payment.upsert({
      where: {
        provider_externalId: {
          provider: providerName,
          externalId: event.externalId,
        },
      },
      create: {
        applicationId: event.applicationId!,
        provider: providerName,
        externalId: event.externalId,
        amountCents: event.amountCents ?? 0,
        currency: event.currency ?? 'USD',
        status: paymentStatus,
        rawPayload,
      },
      update: {
        status: paymentStatus,
        rawPayload,
        ...(event.amountCents != null ? { amountCents: event.amountCents } : {}),
        ...(event.currency ? { currency: event.currency } : {}),
      },
    });
  }

  private async resolvePlan(planYears: number): Promise<{ priceCents: number; currency: string }> {
    const pricing = await this.pricing.getPricing();
    const plan = pricing.items.find((p) => p.years === planYears);
    if (!plan) {
      throw new BadRequestException(`No pricing plan found for ${planYears}y`);
    }
    return { priceCents: plan.priceCents, currency: plan.currency };
  }

  /**
   * Extracted from the legacy Gumroad controller so every provider's happy-path
   * triggers the same thank-you email + PDF attachment.
   */
  private async sendThankYouEmail(
    row: Application,
    providerName: PaymentProviderEnum,
    event: ParsedPaymentEvent,
  ) {
    try {
      const brand = resolveEmailLogoDataUri();
      const { subject, html, text } = buildThankYouEmail({
        customerEmail: row.email,
        applicationId: row.id,
        dto: {
          firstName: row.firstName,
          lastName: row.lastName,
          planYears: row.planYears as 1 | 3 | 5,
          issueCountry: row.issueCountry,
        },
        brand,
      });

      const snap = {
        applicationId: row.id,
        createdAtMs: row.createdAt.getTime(),
        email: row.email,
        phone: row.phone ?? undefined,
        firstName: row.firstName,
        lastName: row.lastName,
        issueCountry: row.issueCountry,
        dobDay: row.dobDay,
        dobMonth: row.dobMonth,
        dobYear: row.dobYear,
        sex: row.sex,
        planYears: row.planYears as 1 | 3 | 5,
        licenseNumber: row.licenseNumber ?? undefined,
        licenseCategories: row.licenseCategories,
        signatureDataUrl: row.signatureDataUrl,
        verificationId: row.verificationId,
        headshotMeta: {
          path: row.headshotPath,
          originalName: row.headshotOriginalName,
          mimetype: row.headshotMimeType,
          size: row.headshotSize,
        },
      };

      const pdfBuf = await this.pdf.buildPdf(snap as never);
      const result = await this.email.sendEmail({
        to: row.email,
        subject,
        html,
        text,
        attachments: [
          {
            filename: `idp-companion-${row.id}.pdf`,
            contentType: 'application/pdf',
            contentBase64: pdfBuf.toString('base64'),
          },
        ],
        tags: [
          { name: 'event', value: 'payment_confirmed' },
          { name: 'provider', value: providerName },
          { name: 'applicationId', value: row.id },
          { name: 'externalId', value: resendSafeTagValue(event.externalId) },
        ],
      });

      if (!result.ok) {
        this.logger.warn(
          `payment confirmed but email not sent: provider=${providerName} kind=${result.error.kind}`,
        );
      }
    } catch (e) {
      this.logger.error(
        `payment confirmed but email/pdf threw: provider=${providerName}`,
        e as Error,
      );
    }
  }
}
