<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usAustraliaCopy } from '~/content/country-pairs/tier-2/us/us-australia';

definePageMeta({ path: '/idp-for-us-drivers-in-australia' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usAustraliaCopy"
		origin-flag="us"
		destination-flag="au"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-australia"
		id-prefix="us-au-faq"
		illustration="/illustrations/us-australia-hero.png"
		analytics-origin="us"
		analytics-destination="australia"
	/>
</template>
