import posthog from 'posthog-js';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const key = String(config.public.posthogKey ?? '').trim();
	const host = String(config.public.posthogHost ?? '').trim();

	if (!key) return;

	posthog.init(key, {
		api_host: host || 'https://eu.i.posthog.com',
		capture_pageview: false,
		capture_pageleave: true,
		person_profiles: 'identified_only',
	});

	const router = useRouter();

	router.afterEach((to) => {
		posthog.capture('$pageview', {
			path: to.fullPath,
			app_name: 'landing',
		});
	});
});
