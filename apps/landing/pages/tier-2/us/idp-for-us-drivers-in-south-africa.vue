<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usSouthAfricaCopy } from '~/content/country-pairs/tier-2/us/us-south-africa';

definePageMeta({ path: '/idp-for-us-drivers-in-south-africa' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usSouthAfricaCopy"
		origin-flag="us"
		destination-flag="za"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-south-africa"
		id-prefix="us-za-faq"
		illustration="/illustrations/us-south-africa-hero.png"
		analytics-origin="us"
		analytics-destination="south-africa"
	/>
</template>
