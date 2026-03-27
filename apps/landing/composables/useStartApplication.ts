import { computed, ref, unref, type Ref } from 'vue';
import { useI18n } from '#imports';
import { LOCALE_QUERY_PARAM } from '@i18n';
import type { PlanYears } from '~/components/widgets/StartApplicationWidget.vue';

type MaybeRef<T> = T | Ref<T>;

function normalizeBaseUrl(v: string) {
	return v.replace(/\/+$/, '');
}

export function useStartApplication(appUrl: MaybeRef<string>) {
	const { locale } = useI18n();
	const issueCountry = ref<string>('');
	const planYears = ref<PlanYears>(5);

	const startAppHref = computed(() => {
		const base = normalizeBaseUrl(String(unref(appUrl) || '').trim());
		const qs = new URLSearchParams({
			issueCountry: issueCountry.value,
			planYears: String(planYears.value),
			[LOCALE_QUERY_PARAM]: locale.value,
		});
		return `${base}/apply?${qs.toString()}`;
	});

	const fromPrice = computed(() => 35);

	function scrollToPricing() {
		if (!process.client) return;
		document
			.getElementById('pricing')
			?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return {
		issueCountry,
		planYears,
		startAppHref,
		fromPrice,
		scrollToPricing,
	};
}
