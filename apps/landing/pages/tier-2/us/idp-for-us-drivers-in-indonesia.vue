<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usIndonesiaCopy } from '~/content/country-pairs/tier-2/us/us-indonesia';

definePageMeta({ path: '/idp-for-us-drivers-in-indonesia' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usIndonesiaCopy"
		origin-flag="us"
		destination-flag="id"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-indonesia"
		id-prefix="us-id-faq"
		illustration="/illustrations/us-indonesia-hero.png"
		analytics-origin="us"
		analytics-destination="indonesia"
	/>
</template>
