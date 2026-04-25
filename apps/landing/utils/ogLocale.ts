const OG_LOCALE_MAP: Record<string, string> = {
	en: 'en_US',
	ru: 'ru_RU',
	es: 'es_ES',
};

export function toOgLocale(locale: string): string {
	return OG_LOCALE_MAP[locale] ?? 'en_US';
}
