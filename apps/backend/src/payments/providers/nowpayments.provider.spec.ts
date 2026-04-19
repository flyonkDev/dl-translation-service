import * as crypto from 'node:crypto';
import { NowPaymentsProvider, computeNowPaymentsSignature, sortObjectKeysDeep } from './nowpayments.provider';

function sign(body: unknown, secret: string): string {
  const raw = JSON.stringify(body);
  return computeNowPaymentsSignature(raw, secret);
}

describe('NowPaymentsProvider', () => {
  describe('sortObjectKeysDeep', () => {
    it('sorts keys alphabetically recursively', () => {
      const input = { b: 1, a: { d: 4, c: 3 }, z: [{ y: 2, x: 1 }] };
      const sorted = sortObjectKeysDeep(input) as Record<string, unknown>;
      expect(Object.keys(sorted)).toEqual(['a', 'b', 'z']);
      expect(Object.keys(sorted.a as object)).toEqual(['c', 'd']);
      const arr = sorted.z as Record<string, unknown>[];
      expect(Object.keys(arr[0])).toEqual(['x', 'y']);
    });
  });

  describe('computeNowPaymentsSignature', () => {
    it('produces the HMAC-SHA512 of the key-sorted JSON', () => {
      const secret = 'test-secret';
      const body = { b: 1, a: 2 };
      const expected = crypto
        .createHmac('sha512', secret)
        .update(JSON.stringify({ a: 2, b: 1 }))
        .digest('hex');
      expect(computeNowPaymentsSignature(JSON.stringify(body), secret)).toBe(expected);
    });

    it('is stable regardless of input key order', () => {
      const secret = 's3cret';
      const a = computeNowPaymentsSignature(JSON.stringify({ a: 1, b: 2 }), secret);
      const b = computeNowPaymentsSignature(JSON.stringify({ b: 2, a: 1 }), secret);
      expect(a).toBe(b);
    });
  });

  describe('verifyWebhook', () => {
    const IPN_SECRET = 'unit-test-secret';
    let provider: NowPaymentsProvider;
    let prevSecret: string | undefined;

    beforeEach(() => {
      prevSecret = process.env.NOWPAYMENTS_IPN_SECRET;
      process.env.NOWPAYMENTS_IPN_SECRET = IPN_SECRET;
      provider = new NowPaymentsProvider();
    });

    afterEach(() => {
      if (prevSecret === undefined) delete process.env.NOWPAYMENTS_IPN_SECRET;
      else process.env.NOWPAYMENTS_IPN_SECRET = prevSecret;
    });

    const samplePayload = {
      payment_id: 5077125051,
      invoice_id: 4781288378,
      payment_status: 'finished',
      pay_address: 'Txxxxxxxxxxxxxxx',
      price_amount: 55,
      price_currency: 'usd',
      pay_amount: 55.77,
      actually_paid: 55.77,
      pay_currency: 'usdttrc20',
      order_id: '0a1b2c3d-0000-4000-8000-000000000001',
      order_description: 'IDP Companion — 5Y Plan',
    };

    it('accepts a correctly signed payload', () => {
      const rawBody = JSON.stringify(samplePayload);
      const sig = sign(samplePayload, IPN_SECRET);

      const ok = provider.verifyWebhook({
        headers: { 'x-nowpayments-sig': sig },
        rawBody,
        query: {},
      });
      expect(ok).toBe(true);
    });

    it('rejects a tampered payload', () => {
      const rawBody = JSON.stringify(samplePayload);
      const sig = sign(samplePayload, IPN_SECRET);
      const tampered = JSON.stringify({ ...samplePayload, price_amount: 1 });

      const ok = provider.verifyWebhook({
        headers: { 'x-nowpayments-sig': sig },
        rawBody: tampered,
        query: {},
      });
      expect(ok).toBe(false);
    });

    it('rejects when signature header is missing', () => {
      const ok = provider.verifyWebhook({
        headers: {},
        rawBody: JSON.stringify(samplePayload),
        query: {},
      });
      expect(ok).toBe(false);
    });

    it('rejects when IPN secret is unset', () => {
      delete process.env.NOWPAYMENTS_IPN_SECRET;
      const freshProvider = new NowPaymentsProvider();
      const ok = freshProvider.verifyWebhook({
        headers: { 'x-nowpayments-sig': 'whatever' },
        rawBody: JSON.stringify(samplePayload),
        query: {},
      });
      expect(ok).toBe(false);
    });
  });

  describe('parseEvent', () => {
    const provider = new NowPaymentsProvider();

    it('maps finished → confirmed and extracts applicationId from order_id', () => {
      const parsed = provider.parseEvent({
        payment_id: 1,
        invoice_id: 999,
        payment_status: 'finished',
        price_amount: 55,
        price_currency: 'usd',
        order_id: '0a1b2c3d-0000-4000-8000-000000000001',
      });
      expect(parsed.status).toBe('confirmed');
      expect(parsed.externalId).toBe('999');
      expect(parsed.applicationId).toBe('0a1b2c3d-0000-4000-8000-000000000001');
      expect(parsed.amountCents).toBe(5500);
      expect(parsed.currency).toBe('USD');
    });

    it('maps waiting/confirming to pending', () => {
      expect(provider.parseEvent({ invoice_id: 1, payment_status: 'waiting' }).status).toBe('pending');
      expect(provider.parseEvent({ invoice_id: 1, payment_status: 'confirming' }).status).toBe('pending');
      expect(provider.parseEvent({ invoice_id: 1, payment_status: 'partially_paid' }).status).toBe('pending');
    });

    it('maps failed/refunded to failed', () => {
      expect(provider.parseEvent({ invoice_id: 1, payment_status: 'failed' }).status).toBe('failed');
      expect(provider.parseEvent({ invoice_id: 1, payment_status: 'refunded' }).status).toBe('failed');
    });

    it('maps expired to expired', () => {
      expect(provider.parseEvent({ invoice_id: 1, payment_status: 'expired' }).status).toBe('expired');
    });
  });
});
