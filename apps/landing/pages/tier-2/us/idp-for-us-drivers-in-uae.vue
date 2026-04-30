<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usUaeCopy } from '~/content/country-pairs/tier-2/us/us-uae';

// Override file-based routing — file lives in /pages/tier-2/us/ for organisation,
// but URL contract is the flat slug. Never change this once published.
definePageMeta({ path: '/idp-for-us-drivers-in-uae' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usUaeCopy"
		origin-flag="us"
		destination-flag="ae"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-uae"
		id-prefix="us-ae-faq"
		illustration="/illustrations/us-uae-hero.svg"
		analytics-origin="us"
		analytics-destination="uae"
	/>
</template>
