import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import {
	LOCALE_QUERY_PARAM,
	LOCALE_STORAGE_KEY,
	type SupportedLocale,
	isSupportedLocale,
} from '@i18n';
import { setLocale } from '@/app/i18n';

/** flag-icons: `fi fi-{flagCode}` (ISO 3166-1 alpha-2) */
export const LOCALE_CHOICES = [
	{ code: 'en' as const, label: 'English', flagCode: 'us' },
	{ code: 'ru' as const, label: 'Русский', flagCode: 'ru' },
	{ code: 'es' as const, label: 'Español', flagCode: 'es' },
] as const;

export function useAppLocale() {
	const route = useRoute();
	const router = useRouter();
	const { locale } = useI18n();

	const currentLocale = computed(() => {
		const v = locale.value;
		return isSupportedLocale(v) ? v : 'en';
	});

	function selectLocale(code: SupportedLocale) {
		if (!isSupportedLocale(code)) return;
		setLocale(code);
		try {
			localStorage.setItem(LOCALE_STORAGE_KEY, code);
		} catch {
			/* ignore */
		}
		void router.replace({
			path: route.path,
			query: { ...route.query, [LOCALE_QUERY_PARAM]: code },
			hash: route.hash,
		});
	}

	return {
		currentLocale,
		selectLocale,
		localeChoices: LOCALE_CHOICES,
	};
}
