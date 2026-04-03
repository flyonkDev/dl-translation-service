import { BadRequestException, Controller, Logger, Post, Query, Body } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { ResendEmailService } from '../../email/resend-email.service';
import { buildThankYouEmail } from '../../email/email.templates';
import { resolveEmailLogoDataUri } from '../../email/email.branding';
import { ApplicationsPdfService } from '../../applications/applications-pdf.service';

type GumroadWebhookPayload = Partial<{
  referrer: string;
  purchaser_email: string;
  email: string;
  product_permalink: string;
  sale_id: string;
}>;

function getEnv(name: string): string | undefined {
  const v = process.env[name];
  if (v == null) return undefined;
  const trimmed = v.trim();
  return trimmed.length ? trimmed : undefined;
}

/** Resend: tag values may only contain ASCII letters, numbers, underscores, dashes. */
function resendSafeTagValue(raw: string, maxLen = 128): string {
  const s = String(raw).slice(0, maxLen);
  const cleaned = s
    .replace(/[^a-zA-Z0-9_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return cleaned.length ? cleaned : 'na';
}

function extractApplicationIdFromReferrer(referrer: string): string | null {
  try {
    const u = new URL(referrer);
    // expected: /payment/<uuid> (but be resilient to extra slashes / prefixes)
    const uuidRe =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    const parts = u.pathname.split('/').filter(Boolean);
    const idx = parts.findIndex((p) => p.toLowerCase() === 'payment');
    if (idx >= 0) {
      const candidate = parts[idx + 1];
      if (candidate && uuidRe.test(candidate)) return candidate;
    }

    // fallback: last path segment
    const last = parts.at(-1);
    if (last && uuidRe.test(last)) return last;

    return null;
  } catch {
    return null;
  }
}

@Controller('payments/gumroad')
export class GumroadWebhookController {
  private readonly logger = new Logger(GumroadWebhookController.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly email: ResendEmailService,
    private readonly pdf: ApplicationsPdfService,
  ) {}

  @Post('webhook')
  async webhook(
    @Query('token') token?: string,
    @Body() body?: GumroadWebhookPayload,
  ) {
    const expected = getEnv('GUMROAD_WEBHOOK_TOKEN');
    if (expected && token !== expected) {
      throw new BadRequestException('invalid token');
    }

    const payload = body ?? {};
    const referrer = String(payload.referrer ?? '').trim();
    if (!referrer) throw new BadRequestException('missing referrer');

    const applicationId = extractApplicationIdFromReferrer(referrer);
    if (!applicationId) {
      throw new BadRequestException({
        message: 'could not extract applicationId from referrer',
        referrer: referrer.slice(0, 300),
      });
    }

    const row = await this.prisma.application.findUnique({ where: { id: applicationId } });
    if (!row) throw new BadRequestException('application not found');

    if (row.status !== 'paid' && row.status !== 'pdf_ready') {
      await this.prisma.application.update({
        where: { id: applicationId },
        data: { status: 'paid' },
      });
      this.logger.log(`gumroad webhook: marked paid applicationId=${applicationId}`);
    }

    const sendOnPayment = getEnv('EMAIL_SEND_ON_PAYMENT') === '1' || getEnv('EMAIL_SEND_ON_PAYMENT') === 'true';
    if (!sendOnPayment) return { ok: true, applicationId, updated: true, emailed: false };

    const brand = resolveEmailLogoDataUri();
    const { subject, html, text } = buildThankYouEmail({
      customerEmail: row.email,
      applicationId,
      dto: {
        firstName: row.firstName,
        lastName: row.lastName,
        planYears: row.planYears as any,
        issueCountry: row.issueCountry,
      },
      brand,
    });

    try {
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
        sex: row.sex as any,
        planYears: row.planYears as 1 | 3 | 5,
        licenseNumber: row.licenseNumber ?? undefined,
        licenseCategories: row.licenseCategories as any,
        signatureDataUrl: row.signatureDataUrl,
        verificationId: row.verificationId,
        headshotMeta: {
          path: row.headshotPath,
          originalName: row.headshotOriginalName,
          mimetype: row.headshotMimeType,
          size: row.headshotSize,
        },
      };

      const pdfBuf = await this.pdf.buildPdf(snap as any);
      const result = await this.email.sendEmail({
        to: row.email,
        subject,
        html,
        text,
        attachments: [
          {
            filename: `idp-companion-${applicationId}.pdf`,
            contentType: 'application/pdf',
            contentBase64: pdfBuf.toString('base64'),
          },
        ],
        tags: [
          { name: 'event', value: 'payment_confirmed' },
          { name: 'applicationId', value: applicationId },
          { name: 'saleId', value: resendSafeTagValue(String(payload.sale_id ?? '')) },
          { name: 'product', value: resendSafeTagValue(String(payload.product_permalink ?? '')) },
        ],
      });

      if (!result.ok) {
        this.logger.warn(`gumroad webhook: email not sent kind=${result.error.kind}`);
        return { ok: true, applicationId, updated: true, emailed: false };
      }

      return { ok: true, applicationId, updated: true, emailed: true };
    } catch (e) {
      this.logger.error('gumroad webhook: email/pdf failed', e as any);
      return { ok: true, applicationId, updated: true, emailed: false };
    }
  }
}

