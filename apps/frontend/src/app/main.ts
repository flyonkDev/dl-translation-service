import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import { i18n } from './i18n';
import { initPosthog } from '@/shared/lib/posthog';

import 'flag-icons/css/flag-icons.min.css';
import '@ui-kit/css-vars.scss';
import '@ui-kit/layout.scss';
import '@/app/styles/tailwind.css';
import '@/app/styles/theme.scss';
import './style.css';

const app = createApp(App);
app.use(router);
initPosthog(router);
app.use(i18n);
app.use(createPinia());
app.mount('#app');
