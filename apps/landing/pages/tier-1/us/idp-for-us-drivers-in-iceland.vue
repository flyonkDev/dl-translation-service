<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usIcelandCopy } from '~/content/country-pairs/tier-1/us/us-iceland';

// File lives in /pages/tier-1/us/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-us-drivers-in-iceland' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usIcelandCopy"
		origin-flag="us"
		destination-flag="is"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-iceland"
		id-prefix="us-is-faq"
		illustration="/illustrations/us-iceland-hero.svg"
		analytics-origin="us"
		analytics-destination="iceland"
	/>
</template>
