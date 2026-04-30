<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usGreeceCopy } from '~/content/country-pairs/tier-1/us/us-greece';

// File lives in /pages/tier-1/us/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-us-drivers-in-greece' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usGreeceCopy"
		origin-flag="us"
		destination-flag="gr"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-greece"
		id-prefix="us-gr-faq"
		illustration="/illustrations/us-greece-hero.svg"
		analytics-origin="us"
		analytics-destination="greece"
	/>
</template>
