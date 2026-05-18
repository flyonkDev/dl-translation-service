<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usIrelandCopy } from '~/content/country-pairs/tier-2/us/us-ireland';

definePageMeta({ path: '/idp-for-us-drivers-in-ireland' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usIrelandCopy"
		origin-flag="us"
		destination-flag="ie"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-ireland"
		id-prefix="us-ie-faq"
		illustration="/illustrations/us-ireland-hero.png"
		analytics-origin="us"
		analytics-destination="ireland"
	/>
</template>
