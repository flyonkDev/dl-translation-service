import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import DriverLicenseApplicationPage from '@/pages/DriverLicenseApplicationPage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';

const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: '/apply' },
	{ path: '/apply', name: 'apply', component: DriverLicenseApplicationPage },
	{ path: '/payment/:applicationId', name: 'payment', component: PaymentPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
