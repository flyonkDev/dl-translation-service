export type EmailSendResult =
  | {
      ok: true;
      provider: 'resend';
      messageId: string;
    }
  | {
      ok: false;
      provider: 'resend';
      error: {
        kind:
          | 'not_configured'
          | 'invalid_request'
          | 'unauthorized'
          | 'rate_limited'
          | 'provider_error'
          | 'network_error';
        message: string;
        status?: number;
        details?: unknown;
      };
    };

export type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
  replyTo?: string;
  tags?: Array<{ name: string; value: string }>;
  attachments?: Array<{
    filename: string;
    contentType: string;
    contentBase64: string;
  }>;
};

