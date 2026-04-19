import { GumroadProvider, extractApplicationIdFromReferrer } from './gumroad.provider';

describe('extractApplicationIdFromReferrer', () => {
  const uuid = '0a1b2c3d-0000-4000-8000-000000000001';

  it('returns uuid from /payment/<uuid> path', () => {
    expect(extractApplicationIdFromReferrer(`https://app.example.com/payment/${uuid}`)).toBe(uuid);
  });

  it('falls back to last path segment', () => {
    expect(extractApplicationIdFromReferrer(`https://app.example.com/foo/${uuid}`)).toBe(uuid);
  });

  it('returns null for invalid url', () => {
    expect(extractApplicationIdFromReferrer('not-a-url')).toBeNull();
    expect(extractApplicationIdFromReferrer('')).toBeNull();
  });

  it('returns null when no uuid in path', () => {
    expect(extractApplicationIdFromReferrer('https://app.example.com/foo/bar')).toBeNull();
  });
});

describe('GumroadProvider', () => {
  const provider = new GumroadProvider();

  describe('createCheckout', () => {
    it('returns the hosted URL with referrer set', async () => {
      const result = await provider.createCheckout({
        application: { id: 'aaa', planYears: 3 } as never,
        planYears: 3,
        priceCents: 4500,
        currency: 'USD',
        returnUrl: 'https://app.example.com/payment/aaa',
        ipnCallbackUrl: 'https://api.example.com/api/payments/gumroad/webhook',
      });
      expect(result.redirectUrl).toContain('gumroad.com');
      expect(result.redirectUrl).toContain('referrer=');
      expect(result.externalId).toBeUndefined();
    });

    it('throws for unsupported plan years', async () => {
      await expect(
        provider.createCheckout({
          application: { id: 'aaa', planYears: 99 } as never,
          planYears: 99,
          priceCents: 0,
          currency: 'USD',
          returnUrl: 'https://x',
          ipnCallbackUrl: 'https://x',
        }),
      ).rejects.toThrow();
    });
  });

  describe('parseEvent', () => {
    it('pulls applicationId from referrer and status=confirmed', () => {
      const parsed = provider.parseEvent({
        referrer: 'https://app.example.com/payment/0a1b2c3d-0000-4000-8000-000000000001',
        sale_id: 'sale_123',
        price: '5500',
        currency: 'usd',
      });
      expect(parsed.applicationId).toBe('0a1b2c3d-0000-4000-8000-000000000001');
      expect(parsed.externalId).toBe('sale_123');
      expect(parsed.status).toBe('confirmed');
      expect(parsed.amountCents).toBe(5500);
      expect(parsed.currency).toBe('USD');
    });

    it('returns null applicationId when referrer is unparseable', () => {
      const parsed = provider.parseEvent({
        referrer: 'not-a-url',
        sale_id: 'sale_123',
      });
      expect(parsed.applicationId).toBeNull();
    });
  });

  describe('verifyWebhook', () => {
    const originalToken = process.env.GUMROAD_WEBHOOK_TOKEN;

    afterEach(() => {
      if (originalToken === undefined) delete process.env.GUMROAD_WEBHOOK_TOKEN;
      else process.env.GUMROAD_WEBHOOK_TOKEN = originalToken;
    });

    it('accepts matching token', () => {
      process.env.GUMROAD_WEBHOOK_TOKEN = 'secret';
      expect(
        provider.verifyWebhook({ headers: {}, rawBody: '', query: { token: 'secret' } }),
      ).toBe(true);
    });

    it('rejects mismatched token', () => {
      process.env.GUMROAD_WEBHOOK_TOKEN = 'secret';
      expect(
        provider.verifyWebhook({ headers: {}, rawBody: '', query: { token: 'nope' } }),
      ).toBe(false);
    });

    it('allows when token is unset (dev convenience)', () => {
      delete process.env.GUMROAD_WEBHOOK_TOKEN;
      expect(provider.verifyWebhook({ headers: {}, rawBody: '', query: {} })).toBe(true);
    });
  });
});
