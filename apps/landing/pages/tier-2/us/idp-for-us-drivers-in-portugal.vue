<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usPortugalCopy } from '~/content/country-pairs/tier-2/us/us-portugal';

definePageMeta({ path: '/idp-for-us-drivers-in-portugal' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usPortugalCopy"
		origin-flag="us"
		destination-flag="pt"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-portugal"
		id-prefix="us-pt-faq"
		illustration="/illustrations/us-portugal-hero.png"
		analytics-origin="us"
		analytics-destination="portugal"
	/>
</template>
