<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { russiaThailandCopy } from '~/content/country-pairs/tier-1/russia/russia-thailand';

// File lives in /pages/tier-1/russia/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-russian-drivers-in-thailand' });

// Available in EN + RU. ES intentionally skipped — irrelevant audience.
defineI18nRoute({
	locales: ['en', 'ru'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="russiaThailandCopy"
		origin-flag="ru"
		destination-flag="th"
		issue-country="RU"
		canonical-path="/idp-for-russian-drivers-in-thailand"
		id-prefix="ru-th-faq"
		illustration="/illustrations/russia-thailand-hero.svg"
		analytics-origin="russia"
		analytics-destination="thailand"
	/>
</template>
