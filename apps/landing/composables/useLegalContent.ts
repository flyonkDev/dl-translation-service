import type { LegalDoc } from '~/content/legal/types';
import termsEn from '~/content/legal/terms-en';
import termsRu from '~/content/legal/terms-ru';
import termsEs from '~/content/legal/terms-es';
import privacyEn from '~/content/legal/privacy-en';
import privacyRu from '~/content/legal/privacy-ru';
import privacyEs from '~/content/legal/privacy-es';
import refundEn from '~/content/legal/refund-en';
import refundRu from '~/content/legal/refund-ru';
import refundEs from '~/content/legal/refund-es';

function docForLocale<T extends LegalDoc>(en: T, ru: T, es: T, locale: string): T {
	if (locale === 'ru') return ru;
	if (locale === 'es') return es;
	return en;
}

export function useLegalTerms() {
	const { locale } = useI18n();
	return computed(() => docForLocale(termsEn, termsRu, termsEs, locale.value));
}

export function useLegalPrivacy() {
	const { locale } = useI18n();
	return computed(() => docForLocale(privacyEn, privacyRu, privacyEs, locale.value));
}

export function useLegalRefund() {
	const { locale } = useI18n();
	return computed(() => docForLocale(refundEn, refundRu, refundEs, locale.value));
}
