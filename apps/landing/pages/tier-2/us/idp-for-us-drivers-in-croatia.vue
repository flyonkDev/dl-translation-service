<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usCroatiaCopy } from '~/content/country-pairs/tier-2/us/us-croatia';

definePageMeta({ path: '/idp-for-us-drivers-in-croatia' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usCroatiaCopy"
		origin-flag="us"
		destination-flag="hr"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-croatia"
		id-prefix="us-hr-faq"
		illustration="/illustrations/us-croatia-hero.png"
		analytics-origin="us"
		analytics-destination="croatia"
	/>
</template>
