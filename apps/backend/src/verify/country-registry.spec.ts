import { normalizeCountryCode, getOcrLanguageAttempts } from './country-registry';

describe('country-registry', () => {
  it('normalizes aliases and alpha-3', () => {
    expect(normalizeCountryCode('RUS')).toBe('RU');
    expect(normalizeCountryCode('usa')).toBe('US');
    expect(normalizeCountryCode('GBR')).toBe('GB');
    expect(normalizeCountryCode('DE')).toBe('DE');
  });

  it('returns OCR attempts for DE', () => {
    const a = getOcrLanguageAttempts('DE');
    expect(a.length).toBeGreaterThan(0);
    expect(a[0]).toContain('deu');
  });

  it('returns default attempts for empty country', () => {
    const a = getOcrLanguageAttempts(undefined);
    expect(a).toContain('eng');
  });
});
