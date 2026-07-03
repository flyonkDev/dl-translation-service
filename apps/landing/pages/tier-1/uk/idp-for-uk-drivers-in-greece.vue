<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/PageCityLed.vue';
import { ukGreeceCopy } from '~/content/country-pairs/tier-1/uk/uk-greece';

definePageMeta({ path: '/idp-for-uk-drivers-in-greece' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukGreeceCopy"
		origin-flag="gb"
		destination-flag="gr"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-greece"
		id-prefix="uk-gr-faq"
		illustration="/illustrations/uk-greece-hero.svg"
		analytics-origin="uk"
		analytics-destination="greece"
	/>
</template>
