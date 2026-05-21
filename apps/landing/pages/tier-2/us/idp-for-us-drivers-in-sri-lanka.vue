<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usSriLankaCopy } from '~/content/country-pairs/tier-2/us/us-sri-lanka';

definePageMeta({ path: '/idp-for-us-drivers-in-sri-lanka' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usSriLankaCopy"
		origin-flag="us"
		destination-flag="lk"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-sri-lanka"
		id-prefix="us-lk-faq"
		illustration="/illustrations/us-sri-lanka-hero.png"
		analytics-origin="us"
		analytics-destination="sri-lanka"
	/>
</template>
