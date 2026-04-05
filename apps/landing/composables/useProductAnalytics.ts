import { computed } from 'vue';
import posthog from 'posthog-js';
import { useRuntimeConfig } from '#imports';

/**
 * Custom product events (landing). Requires `posthog.client` plugin + `NUXT_PUBLIC_POSTHOG_KEY`.
 */
export function useProductAnalytics() {
	const config = useRuntimeConfig();
	const enabled = computed(() =>
		Boolean(String(config.public.posthogKey ?? '').trim()),
	);

	function capture(event: string, properties?: Record<string, unknown>): void {
		if (!enabled.value) return;
		posthog.capture(event, { app_name: 'landing', ...properties });
	}

	return { capture, enabled };
}
