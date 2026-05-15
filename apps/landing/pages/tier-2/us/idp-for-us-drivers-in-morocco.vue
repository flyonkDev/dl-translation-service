<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usMoroccoCopy } from '~/content/country-pairs/tier-2/us/us-morocco';

definePageMeta({ path: '/idp-for-us-drivers-in-morocco' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usMoroccoCopy"
		origin-flag="us"
		destination-flag="ma"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-morocco"
		id-prefix="us-ma-faq"
		illustration="/illustrations/us-morocco-hero.png"
		analytics-origin="us"
		analytics-destination="morocco"
	/>
</template>
