import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import DriverLicenseApplicationPage from '@/pages/DriverLicenseApplicationPage.vue';

const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: '/apply' },
	{ path: '/apply', name: 'apply', component: DriverLicenseApplicationPage },
	// позже: { path: '/success', name: 'success', component: SuccessPage }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
