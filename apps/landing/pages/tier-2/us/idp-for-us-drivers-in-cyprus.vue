<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usCyprusCopy } from '~/content/country-pairs/tier-2/us/us-cyprus';

definePageMeta({ path: '/idp-for-us-drivers-in-cyprus' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usCyprusCopy"
		origin-flag="us"
		destination-flag="cy"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-cyprus"
		id-prefix="us-cy-faq"
		illustration="/illustrations/us-cyprus-hero.png"
		analytics-origin="us"
		analytics-destination="cyprus"
	/>
</template>
