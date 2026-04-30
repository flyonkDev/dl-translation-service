<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usJapanCopy } from '~/content/country-pairs/tier-1/us/us-japan';

// File lives in /pages/tier-1/us/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-us-drivers-in-japan' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usJapanCopy"
		origin-flag="us"
		destination-flag="jp"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-japan"
		id-prefix="us-jp-faq"
		illustration="/illustrations/us-japan-hero.svg"
		analytics-origin="us"
		analytics-destination="japan"
	/>
</template>
