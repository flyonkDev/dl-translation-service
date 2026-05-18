<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usNorwayCopy } from '~/content/country-pairs/tier-2/us/us-norway';

definePageMeta({ path: '/idp-for-us-drivers-in-norway' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usNorwayCopy"
		origin-flag="us"
		destination-flag="no"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-norway"
		id-prefix="us-no-faq"
		illustration="/illustrations/us-norway-hero.png"
		analytics-origin="us"
		analytics-destination="norway"
	/>
</template>
