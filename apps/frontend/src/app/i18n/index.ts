import { createI18n } from 'vue-i18n';
import { DEFAULT_LOCALE, type SupportedLocale } from '@i18n';

// MVP: dictionaries live in SPA for now.
// Later we can share common keys via packages/i18n if it proves useful.
const messages = {
  en: {
    common: {
      continueToPayment: 'Continue to payment',
    },
    header: {
      language: 'Language',
    },
  },
  ru: {
    common: {
      continueToPayment: 'Перейти к оплате',
    },
    header: {
      language: 'Язык',
    },
  },
  es: {
    common: {
      continueToPayment: 'Continuar al pago',
    },
    header: {
      language: 'Idioma',
    },
  },
} as const;

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
});

export function setLocale(locale: SupportedLocale) {
  i18n.global.locale.value = locale;
}

