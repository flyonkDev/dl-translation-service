<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usThailandCopy } from '~/content/country-pairs/us-thailand';

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usThailandCopy"
		origin-flag="us"
		destination-flag="th"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-thailand"
		id-prefix="us-th-faq"
		illustration="/illustrations/us-thailand-hero.svg"
		analytics-origin="us"
		analytics-destination="thailand"
	/>
</template>
