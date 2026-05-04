<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { russiaIndonesiaCopy } from '~/content/country-pairs/tier-1/russia/russia-indonesia';

// File lives in /pages/tier-1/russia/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-russian-drivers-in-indonesia' });

// Available in EN + RU. ES intentionally skipped — irrelevant audience.
defineI18nRoute({
	locales: ['en', 'ru'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="russiaIndonesiaCopy"
		origin-flag="ru"
		destination-flag="id"
		issue-country="RU"
		canonical-path="/idp-for-russian-drivers-in-indonesia"
		id-prefix="ru-id-faq"
		illustration="/illustrations/russia-indonesia-hero.webp"
		analytics-origin="russia"
		analytics-destination="indonesia"
	/>
</template>
