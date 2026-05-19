/**
 * Display-name dictionary keyed by URL slug (the same token used in
 * `/idp-for-{origin}-drivers-in-{destination}/`).
 *
 * Used by /sitemap-page/ and any other page that lists countries without
 * re-importing each country-pair content module (which would balloon bundle size).
 *
 * When a new country-pair page ships, add the destination slug here in all three
 * locales. The lookup falls back to a humanised slug if a key is missing.
 */

export type LocaleKey = 'en' | 'ru' | 'es';

export interface CountryName {
	en: string;
	ru: string;
	es: string;
	/** ISO-2 lowercase for flag-icons CSS (e.g. 'gb', 'us', 'it'). */
	flag: string;
}

/** Origin codes used in the URL pattern (e.g. `idp-for-{us|uk|russian}-drivers-in-...`). */
export const ORIGIN_DISPLAY: Record<string, CountryName> = {
	us:     { en: 'United States',  ru: 'США',            es: 'Estados Unidos', flag: 'us' },
	uk:     { en: 'United Kingdom', ru: 'Великобритания', es: 'Reino Unido',    flag: 'gb' },
	russia: { en: 'Russia',         ru: 'Россия',         es: 'Rusia',          flag: 'ru' },
};

/** Destination display by URL slug. Keep alphabetised by slug. */
export const DESTINATION_DISPLAY: Record<string, CountryName> = {
	'australia':           { en: 'Australia',           ru: 'Австралия',         es: 'Australia',              flag: 'au' },
	'costa-rica':          { en: 'Costa Rica',          ru: 'Коста-Рика',        es: 'Costa Rica',             flag: 'cr' },
	'croatia':             { en: 'Croatia',             ru: 'Хорватия',          es: 'Croacia',                flag: 'hr' },
	'cyprus':              { en: 'Cyprus',              ru: 'Кипр',              es: 'Chipre',                 flag: 'cy' },
	'dominican-republic':  { en: 'Dominican Republic',  ru: 'Доминикана',        es: 'República Dominicana',   flag: 'do' },
	'egypt':               { en: 'Egypt',               ru: 'Египет',            es: 'Egipto',                 flag: 'eg' },
	'france':              { en: 'France',              ru: 'Франция',           es: 'Francia',                flag: 'fr' },
	'germany':             { en: 'Germany',             ru: 'Германия',          es: 'Alemania',               flag: 'de' },
	'greece':              { en: 'Greece',              ru: 'Греция',            es: 'Grecia',                 flag: 'gr' },
	'iceland':             { en: 'Iceland',             ru: 'Исландия',          es: 'Islandia',               flag: 'is' },
	'indonesia':           { en: 'Indonesia',           ru: 'Индонезия',         es: 'Indonesia',              flag: 'id' },
	'ireland':             { en: 'Ireland',             ru: 'Ирландия',          es: 'Irlanda',                flag: 'ie' },
	'italy':               { en: 'Italy',               ru: 'Италия',            es: 'Italia',                 flag: 'it' },
	'japan':               { en: 'Japan',               ru: 'Япония',            es: 'Japón',                  flag: 'jp' },
	'malta':               { en: 'Malta',               ru: 'Мальта',            es: 'Malta',                  flag: 'mt' },
	'mexico':              { en: 'Mexico',              ru: 'Мексика',           es: 'México',                 flag: 'mx' },
	'morocco':             { en: 'Morocco',             ru: 'Марокко',           es: 'Marruecos',              flag: 'ma' },
	'norway':              { en: 'Norway',              ru: 'Норвегия',          es: 'Noruega',                flag: 'no' },
	'portugal':            { en: 'Portugal',            ru: 'Португалия',        es: 'Portugal',               flag: 'pt' },
	'south-africa':        { en: 'South Africa',        ru: 'ЮАР',               es: 'Sudáfrica',              flag: 'za' },
	'spain':               { en: 'Spain',               ru: 'Испания',           es: 'España',                 flag: 'es' },
	'switzerland':         { en: 'Switzerland',         ru: 'Швейцария',         es: 'Suiza',                  flag: 'ch' },
	'thailand':            { en: 'Thailand',            ru: 'Таиланд',           es: 'Tailandia',              flag: 'th' },
	'turkey':              { en: 'Turkey',              ru: 'Турция',            es: 'Turquía',                flag: 'tr' },
	'uae':                 { en: 'UAE',                 ru: 'ОАЭ',               es: 'EAU',                    flag: 'ae' },
	'uk':                  { en: 'United Kingdom',      ru: 'Великобритания',    es: 'Reino Unido',            flag: 'gb' },
	'vietnam':             { en: 'Vietnam',             ru: 'Вьетнам',           es: 'Vietnam',                flag: 'vn' },
};

/** Humanise a slug if it isn't in the dictionary (defensive fallback). */
export function humaniseSlug(slug: string): string {
	return slug
		.split('-')
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(' ');
}

export function destinationName(slug: string, locale: LocaleKey): string {
	const entry = DESTINATION_DISPLAY[slug];
	if (!entry) return humaniseSlug(slug);
	return entry[locale] || entry.en;
}

export function originName(code: string, locale: LocaleKey): string {
	const entry = ORIGIN_DISPLAY[code];
	if (!entry) return humaniseSlug(code);
	return entry[locale] || entry.en;
}

export function destinationFlag(slug: string): string {
	return DESTINATION_DISPLAY[slug]?.flag || '';
}

export function originFlag(code: string): string {
	return ORIGIN_DISPLAY[code]?.flag || '';
}
