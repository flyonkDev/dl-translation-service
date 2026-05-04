<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { russiaEgyptCopy } from '~/content/country-pairs/tier-1/russia/russia-egypt';

// File lives in /pages/tier-1/russia/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-russian-drivers-in-egypt' });

// Available in EN + RU. ES intentionally skipped — irrelevant audience.
defineI18nRoute({
	locales: ['en', 'ru'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="russiaEgyptCopy"
		origin-flag="ru"
		destination-flag="eg"
		issue-country="RU"
		canonical-path="/idp-for-russian-drivers-in-egypt"
		id-prefix="ru-eg-faq"
		illustration="/illustrations/russia-egypt-hero.svg"
		analytics-origin="russia"
		analytics-destination="egypt"
	/>
</template>
