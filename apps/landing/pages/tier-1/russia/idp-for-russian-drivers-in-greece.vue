<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { russiaGreeceCopy } from '~/content/country-pairs/tier-1/russia/russia-greece';

// File lives in /pages/tier-1/russia/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-russian-drivers-in-greece' });

// Available in EN + RU. ES intentionally skipped — irrelevant audience.
defineI18nRoute({
	locales: ['en', 'ru'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="russiaGreeceCopy"
		origin-flag="ru"
		destination-flag="gr"
		issue-country="RU"
		canonical-path="/idp-for-russian-drivers-in-greece"
		id-prefix="ru-gr-faq"
		illustration="/illustrations/russia-greece-hero.svg"
		analytics-origin="russia"
		analytics-destination="greece"
	/>
</template>
