<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usNewZealandCopy } from '~/content/country-pairs/tier-2/us/us-new-zealand';

definePageMeta({ path: '/idp-for-us-drivers-in-new-zealand' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usNewZealandCopy"
		origin-flag="us"
		destination-flag="nz"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-new-zealand"
		id-prefix="us-nz-faq"
		illustration="/illustrations/us-new-zealand-hero.png"
		analytics-origin="us"
		analytics-destination="new-zealand"
	/>
</template>
