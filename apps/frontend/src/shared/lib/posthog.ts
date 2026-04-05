import posthog from 'posthog-js';
import type { Router } from 'vue-router';

const DEFAULT_EU_HOST = 'https://eu.i.posthog.com';

/**
 * Initializes PostHog when `VITE_POSTHOG_KEY` is set. Registers SPA `$pageview` on route changes.
 */
export function initPosthog(router: Router): void {
	const key = import.meta.env.VITE_POSTHOG_KEY?.trim();
	if (!key) return;

	const host = import.meta.env.VITE_POSTHOG_HOST?.trim() || DEFAULT_EU_HOST;

	posthog.init(key, {
		api_host: host,
		capture_pageview: false,
		capture_pageleave: true,
		person_profiles: 'identified_only',
	});

	router.afterEach((to) => {
		posthog.capture('$pageview', {
			path: to.fullPath,
			app_name: 'frontend',
		});
	});
}

/** Funnel / product events (no PII). No-op when PostHog is not configured. */
export function captureProductEvent(
	event: string,
	properties?: Record<string, unknown>,
): void {
	if (!import.meta.env.VITE_POSTHOG_KEY?.trim()) return;
	posthog.capture(event, { app_name: 'frontend', ...properties });
}

/** Links anonymous session to application id after successful submit. */
export function identifyByApplicationId(
	applicationId: string,
	traits?: Record<string, string | number | boolean>,
): void {
	if (!import.meta.env.VITE_POSTHOG_KEY?.trim()) return;
	posthog.identify(applicationId, traits);
}
