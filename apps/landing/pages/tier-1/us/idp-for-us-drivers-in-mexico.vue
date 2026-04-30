<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usMexicoCopy } from '~/content/country-pairs/tier-1/us/us-mexico';

// File lives in /pages/tier-1/us/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-us-drivers-in-mexico' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usMexicoCopy"
		origin-flag="us"
		destination-flag="mx"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-mexico"
		id-prefix="us-mx-faq"
		illustration="/illustrations/us-mexico-hero.svg"
		analytics-origin="us"
		analytics-destination="mexico"
	/>
</template>
