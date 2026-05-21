/**
 * Patch @nuxtjs/i18n hreflang alternates so that the EN-default-locale URL always
 * carries a trailing slash. Without this hook the module emits
 *   <link rel="alternate" href="https://www.idpcompanion.com" hreflang="en">
 * because the default-locale path resolves to "" and is concatenated with `baseUrl`
 * (which has no trailing slash). Cloudflare Pages then 308-redirects the bare host
 * to `/`, and Google reports the source URL as "Redirect error" in Search Console
 * (the hreflang target is unreachable without following a redirect).
 *
 * site.url and i18n.baseUrl cannot simply gain a trailing slash — that would
 * produce `//ru/` for prefixed locales. The narrowest correct fix is to rewrite
 * the rendered <link rel="alternate" ...> tags in nitro's `render:html` hook.
 *
 * Applies to canonical too, but in practice the canonical for the EN homepage
 * already comes through with the slash (different code path in i18n). The regex
 * is scoped to rel="alternate" to stay surgical.
 */
export default defineNitroPlugin((nitroApp) => {
	const ALTERNATE_NO_SLASH =
		/(<link[^>]*\brel="alternate"[^>]*\bhref=")(https?:\/\/[^\/"?#]+)("[^>]*\bhreflang="[^"]+"[^>]*>)/g;

	nitroApp.hooks.hook('render:html', (html) => {
		if (!html.head?.length) return;
		html.head = html.head.map((chunk) =>
			typeof chunk === 'string' ? chunk.replace(ALTERNATE_NO_SLASH, '$1$2/$3') : chunk,
		);
	});
});
