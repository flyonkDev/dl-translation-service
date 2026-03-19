import { createI18n } from 'vue-i18n';
import { DEFAULT_LOCALE, type SupportedLocale } from '@i18n';

import en from './messages/en';
import ru from './messages/ru';
import es from './messages/es';

export const i18n = createI18n({
	legacy: false,
	locale: DEFAULT_LOCALE,
	fallbackLocale: DEFAULT_LOCALE,
	messages: {
		en,
		ru,
		es,
	},
});

export function setLocale(locale: SupportedLocale) {
	i18n.global.locale.value = locale;
}
