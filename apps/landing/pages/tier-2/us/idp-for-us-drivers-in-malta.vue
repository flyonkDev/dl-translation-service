<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usMaltaCopy } from '~/content/country-pairs/tier-2/us/us-malta';

definePageMeta({ path: '/idp-for-us-drivers-in-malta' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usMaltaCopy"
		origin-flag="us"
		destination-flag="mt"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-malta"
		id-prefix="us-mt-faq"
		illustration="/illustrations/us-malta-hero.png"
		analytics-origin="us"
		analytics-destination="malta"
	/>
</template>
