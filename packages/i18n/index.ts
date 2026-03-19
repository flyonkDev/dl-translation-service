export const SUPPORTED_LOCALES = ['en', 'ru', 'es'] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export const LOCALE_QUERY_PARAM = 'locale' as const;

/** SPA: persist chosen locale when user switches in header */
export const LOCALE_STORAGE_KEY = 'idp.locale' as const;

export function isSupportedLocale(v: unknown): v is SupportedLocale {
  return typeof v === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(v);
}

export function normalizeLocale(v: unknown): SupportedLocale {
  return isSupportedLocale(v) ? v : DEFAULT_LOCALE;
}

