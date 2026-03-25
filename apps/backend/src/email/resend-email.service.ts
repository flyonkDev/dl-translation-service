import { Injectable, Logger } from '@nestjs/common';
import type { EmailSendResult, SendEmailInput } from './email.types';

type ResendSendEmailRequest = {
  from: string;
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  reply_to?: string;
  tags?: Array<{ name: string; value: string }>;
  attachments?: Array<{
    filename: string;
    content: string;
    content_type: string;
  }>;
};

type ResendSendEmailResponse =
  | { id: string }
  | {
      error?: {
        message?: string;
        name?: string;
      };
    };

function maskEmail(email: string): string {
  const [user, domain] = email.split('@');
  if (!user || !domain) return '***';
  const safeUser = user.length <= 2 ? `${user[0]}*` : `${user.slice(0, 2)}***`;
  return `${safeUser}@${domain}`;
}

function getEnv(name: string): string | undefined {
  const v = process.env[name];
  if (v == null) return undefined;
  const trimmed = v.trim();
  return trimmed.length ? trimmed : undefined;
}

function isValidEmail(value: string): boolean {
  // Pragmatic check: Resend will validate strictly; we just avoid obviously broken input
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sleep(ms: number): Promise<void> {
  await new Promise((r) => setTimeout(r, ms));
}

@Injectable()
export class ResendEmailService {
  private readonly logger = new Logger(ResendEmailService.name);

  async sendEmail(input: SendEmailInput): Promise<EmailSendResult> {
    const apiKey = getEnv('RESEND_API_KEY');
    if (!apiKey) {
      return {
        ok: false,
        provider: 'resend',
        error: { kind: 'not_configured', message: 'RESEND_API_KEY is not set' },
      };
    }

    const from = input.from ?? getEnv('RESEND_FROM') ?? 'noreply@idpcompanion.com';
    const replyTo = input.replyTo ?? getEnv('RESEND_REPLY_TO');

    if (!isValidEmail(input.to)) {
      return {
        ok: false,
        provider: 'resend',
        error: {
          kind: 'invalid_request',
          message: `Invalid recipient email: ${input.to}`,
        },
      };
    }
    if (!isValidEmail(from)) {
      return {
        ok: false,
        provider: 'resend',
        error: { kind: 'invalid_request', message: `Invalid from email: ${from}` },
      };
    }

    const url = 'https://api.resend.com/emails';
    const body: ResendSendEmailRequest = {
      from,
      to: input.to,
      subject: input.subject,
      html: input.html,
      text: input.text,
      reply_to: replyTo,
      tags: input.tags,
      attachments: input.attachments?.map((a) => ({
        filename: a.filename,
        content: a.contentBase64,
        content_type: a.contentType,
      })),
    };

    const timeoutMs = Number(getEnv('RESEND_TIMEOUT_MS') ?? '8000');
    const maxAttempts = Math.max(1, Math.min(3, Number(getEnv('RESEND_MAX_ATTEMPTS') ?? '3')));

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), timeoutMs);
      const startedAt = Date.now();

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
          signal: controller.signal,
        });

        const elapsedMs = Date.now() - startedAt;
        const status = res.status;

        let json: unknown = undefined;
        try {
          json = (await res.json()) as unknown;
        } catch {
          // ignore parse error; we can still use status + text fallback
        }

        if (res.ok) {
          const data = json as ResendSendEmailResponse;
          if (data && typeof (data as any).id === 'string') {
            this.logger.log(
              `resend: sent email to=${maskEmail(input.to)} status=${status} ms=${elapsedMs}`,
            );
            return { ok: true, provider: 'resend', messageId: (data as any).id as string };
          }

          this.logger.warn(
            `resend: unexpected response shape status=${status} ms=${elapsedMs} to=${maskEmail(
              input.to,
            )}`,
          );
          return {
            ok: false,
            provider: 'resend',
            error: { kind: 'provider_error', message: 'Unexpected provider response', status, details: json },
          };
        }

        const retryable = status === 429 || status >= 500;
        const message =
          (json as any)?.error?.message ??
          (typeof json === 'string' ? json : undefined) ??
          `Resend error (HTTP ${status})`;

        if (status === 401 || status === 403) {
          this.logger.error(
            `resend: unauthorized status=${status} ms=${elapsedMs} to=${maskEmail(input.to)}`,
          );
          return {
            ok: false,
            provider: 'resend',
            error: { kind: 'unauthorized', message, status, details: json },
          };
        }

        if (!retryable || attempt === maxAttempts) {
          this.logger.error(
            `resend: failed status=${status} attempt=${attempt}/${maxAttempts} ms=${elapsedMs} to=${maskEmail(
              input.to,
            )}`,
          );
          return {
            ok: false,
            provider: 'resend',
            error: {
              kind: status === 429 ? 'rate_limited' : 'provider_error',
              message,
              status,
              details: json,
            },
          };
        }

        const backoffMs = 250 * Math.pow(2, attempt - 1) + Math.floor(Math.random() * 100);
        this.logger.warn(
          `resend: retrying status=${status} attempt=${attempt}/${maxAttempts} backoffMs=${backoffMs} to=${maskEmail(
            input.to,
          )}`,
        );
        await sleep(backoffMs);
      } catch (e) {
        const elapsedMs = Date.now() - startedAt;
        const isAbort = e instanceof Error && e.name === 'AbortError';
        const retryable = attempt < maxAttempts;

        if (!retryable) {
          this.logger.error(
            `resend: network error attempt=${attempt}/${maxAttempts} ms=${elapsedMs} to=${maskEmail(
              input.to,
            )}`,
            e as any,
          );
          return {
            ok: false,
            provider: 'resend',
            error: {
              kind: 'network_error',
              message: isAbort ? `Timeout after ${timeoutMs}ms` : 'Network error while sending email',
              details: e,
            },
          };
        }

        const backoffMs = 250 * Math.pow(2, attempt - 1) + Math.floor(Math.random() * 100);
        this.logger.warn(
          `resend: network retry attempt=${attempt}/${maxAttempts} backoffMs=${backoffMs} to=${maskEmail(
            input.to,
          )}`,
        );
        await sleep(backoffMs);
      } finally {
        clearTimeout(timeout);
      }
    }

    return {
      ok: false,
      provider: 'resend',
      error: { kind: 'provider_error', message: 'Unknown error' },
    };
  }
}

