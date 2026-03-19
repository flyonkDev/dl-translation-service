import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import DriverLicenseApplicationPage from '@/pages/DriverLicenseApplicationPage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';
import { LOCALE_QUERY_PARAM, normalizeLocale } from '@i18n';
import { setLocale } from '@/app/i18n';

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
	const raw = to.query[LOCALE_QUERY_PARAM];
	const qLocale = Array.isArray(raw) ? raw[0] : raw;
	const locale = normalizeLocale(qLocale);

	setLocale(locale);

	// Keep locale sticky across SPA navigation.
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
