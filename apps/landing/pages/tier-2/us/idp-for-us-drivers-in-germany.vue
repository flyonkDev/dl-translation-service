<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usGermanyCopy } from '~/content/country-pairs/tier-2/us/us-germany';

definePageMeta({ path: '/idp-for-us-drivers-in-germany' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usGermanyCopy"
		origin-flag="us"
		destination-flag="de"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-germany"
		id-prefix="us-de-faq"
		illustration="/illustrations/us-germany-hero.png"
		analytics-origin="us"
		analytics-destination="germany"
	/>
</template>
