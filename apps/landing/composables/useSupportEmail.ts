/**
 * Single source for support address: `runtimeConfig.public.supportEmail`
 * (set via NUXT_PUBLIC_SUPPORT_EMAIL or default in nuxt.config).
 */
export function useSupportEmail() {
	const config = useRuntimeConfig();
	return computed(() => String(config.public.supportEmail || '').trim());
}

/** Replace `{{EMAIL}}` placeholders in legal copy with the configured address. */
export function useInjectSupportEmail() {
	const email = useSupportEmail();
	return (text: string) => text.replace(/\{\{EMAIL\}\}/g, () => email.value);
}
