<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukIrelandCopy } from '~/content/country-pairs/tier-2/uk/uk-ireland';

definePageMeta({ path: '/idp-for-uk-drivers-in-ireland' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukIrelandCopy"
		origin-flag="gb"
		destination-flag="ie"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-ireland"
		id-prefix="uk-ie-faq"
		illustration="/illustrations/uk-ireland-hero.png"
		analytics-origin="uk"
		analytics-destination="ireland"
	/>
</template>
