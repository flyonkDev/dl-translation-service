<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usDominicanRepublicCopy } from '~/content/country-pairs/tier-2/us/us-dominican-republic';

definePageMeta({ path: '/idp-for-us-drivers-in-dominican-republic' });

defineI18nRoute({
	locales: ['en', 'es'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usDominicanRepublicCopy"
		origin-flag="us"
		destination-flag="do"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-dominican-republic"
		id-prefix="us-do-faq"
		illustration="/illustrations/us-dominican-republic-hero.png"
		analytics-origin="us"
		analytics-destination="dominican-republic"
	/>
</template>
