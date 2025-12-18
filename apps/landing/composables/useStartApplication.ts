import { computed, ref, unref, type Ref } from 'vue';
import type { PlanYears } from '~/components/widgets/StartApplicationWidget.vue';

type MaybeRef<T> = T | Ref<T>;

function normalizeBaseUrl(v: string) {
	return v.replace(/\/+$/, '');
}

export function useStartApplication(appUrl: MaybeRef<string>) {
	const issueCountry = ref<string>('VN');
	const planYears = ref<PlanYears>(3);

	const startAppHref = computed(() => {
		const base = normalizeBaseUrl(String(unref(appUrl) || '').trim());
		const qs = new URLSearchParams({
			issueCountry: issueCountry.value,
			planYears: String(planYears.value),
		});
		return `${base}/apply?${qs.toString()}`;
	});

	const fromPrice = computed(() => 19);

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
