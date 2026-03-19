import { computed } from 'vue';
import { useI18n } from '#imports';

export interface LandingFaqItem {
	id: number;
	question: string;
	answer: string[];
}

const FAQ_IDS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export function useLandingFaqs() {
	const { t, locale } = useI18n();

	return computed<LandingFaqItem[]>(() => {
		void locale.value;
		return FAQ_IDS.map((id) => ({
			id,
			question: t(`faq.${id}.q`),
			answer: [t(`faq.${id}.a0`), t(`faq.${id}.a1`), t(`faq.${id}.a2`)],
		}));
	});
}
