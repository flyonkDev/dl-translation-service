<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/PageCityLed.vue';
import { ukThailandCopy } from '~/content/country-pairs/tier-1/uk/uk-thailand';

definePageMeta({ path: '/idp-for-uk-drivers-in-thailand' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukThailandCopy"
		origin-flag="gb"
		destination-flag="th"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-thailand"
		id-prefix="uk-th-faq"
		illustration="/illustrations/uk-thailand-hero.svg"
		analytics-origin="uk"
		analytics-destination="thailand"
	/>
</template>
