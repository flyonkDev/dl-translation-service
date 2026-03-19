import {
	createRouter,
	createWebHistory,
	type RouteLocationNormalized,
	type RouteRecordRaw,
} from 'vue-router';
import DriverLicenseApplicationPage from '@/pages/DriverLicenseApplicationPage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';
import {
	LOCALE_QUERY_PARAM,
	LOCALE_STORAGE_KEY,
	isSupportedLocale,
	normalizeLocale,
	type SupportedLocale,
} from '@i18n';
import { setLocale } from '@/app/i18n';

function readStoredLocale(): SupportedLocale | null {
	if (typeof window === 'undefined') return null;
	try {
		const v = window.localStorage.getItem(LOCALE_STORAGE_KEY);
		return isSupportedLocale(v) ? v : null;
	} catch {
		return null;
	}
}

function persistLocale(locale: SupportedLocale) {
	if (typeof window === 'undefined') return;
	try {
		window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
	} catch {
		/* ignore */
	}
}

function resolveLocaleForRoute(to: RouteLocationNormalized): SupportedLocale {
	const raw = to.query[LOCALE_QUERY_PARAM];
	const qLocale = Array.isArray(raw) ? raw[0] : raw;
	if (isSupportedLocale(qLocale)) return qLocale;
	const stored = readStoredLocale();
	if (stored) return stored;
	return normalizeLocale(undefined);
}

const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: '/apply' },
	{ path: '/apply', name: 'apply', component: DriverLicenseApplicationPage },
	{ path: '/payment/:applicationId', name: 'payment', component: PaymentPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to) => {
	const locale = resolveLocaleForRoute(to);

	setLocale(locale);
	persistLocale(locale);

	// Keep locale in URL (shareable + matches landing handoff).
	if (to.query[LOCALE_QUERY_PARAM] !== locale) {
		return {
			...to,
			query: { ...to.query, [LOCALE_QUERY_PARAM]: locale },
			replace: true,
		};
	}

	return true;
});

export default router;
