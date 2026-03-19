/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_BASE_URL?: string;
	/** Marketing / Nuxt landing origin, no trailing slash (footer links). */
	readonly VITE_LANDING_ORIGIN?: string;
	/** Shown in AppFooter; optional override. */
	readonly VITE_SUPPORT_EMAIL?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
