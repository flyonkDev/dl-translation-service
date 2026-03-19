import type { SupportedLocale } from '@i18n';

/**
 * Public marketing / landing site origin, no trailing slash.
 * Set `VITE_LANDING_ORIGIN` (e.g. https://idpcompanion.com) so footer links work from the SPA.
 * If unset, hash/path helpers return `#` (links are non-functional until configured).
 */
export function getLandingOrigin(): string {
	return String(import.meta.env.VITE_LANDING_ORIGIN ?? '').replace(/\/+$/, '');
}

/** Same i18n URL shape as Nuxt landing: `prefix_except_default` (no /en prefix). */
export function marketingHash(locale: SupportedLocale, fragment: string): string {
	const o = getLandingOrigin();
	if (!o) return '#';
	const h = fragment.startsWith('#') ? fragment : `#${fragment}`;
	const loc = locale === 'en' ? '' : `/${locale}`;
	return `${o}${loc}${h}`;
}

export function marketingPath(locale: SupportedLocale, path: string): string {
	const o = getLandingOrigin();
	if (!o) return '#';
	const p = path.startsWith('/') ? path : `/${path}`;
	return locale === 'en' ? `${o}${p}` : `${o}/${locale}${p}`;
}
