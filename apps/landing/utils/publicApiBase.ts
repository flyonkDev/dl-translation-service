/**
 * Avoid calling localhost from an HTTPS origin (mixed content; blocked in Firefox and others).
 * Also covers stale cached bundles that still embed a dev API URL.
 */
export function resolveBrowserApiBase(configured: string): string {
	const base = String(configured || '').trim().replace(/\/+$/, '');

	if (typeof window === 'undefined') {
		return base || '/api';
	}

	const isHttps = window.location.protocol === 'https:';
	const isLocalhostTarget =
		/^(https?:\/\/)?(localhost|127\.0\.0\.1)\b/i.test(base) ||
		/^\/\/(localhost|127\.0\.0\.1)\b/i.test(base);

	if (isHttps && isLocalhostTarget) {
		return '/api';
	}

	return base || '/api';
}
