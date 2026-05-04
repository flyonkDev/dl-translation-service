<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { russiaUaeCopy } from '~/content/country-pairs/tier-1/russia/russia-uae';

// File lives in /pages/tier-1/russia/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-russian-drivers-in-uae' });

// Available in EN + RU. ES intentionally skipped — irrelevant audience.
defineI18nRoute({
	locales: ['en', 'ru'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="russiaUaeCopy"
		origin-flag="ru"
		destination-flag="ae"
		issue-country="RU"
		canonical-path="/idp-for-russian-drivers-in-uae"
		id-prefix="ru-ae-faq"
		illustration="/illustrations/russia-uae-hero.svg"
		analytics-origin="russia"
		analytics-destination="uae"
	/>
</template>
