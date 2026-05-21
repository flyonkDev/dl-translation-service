<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usAustriaCopy } from '~/content/country-pairs/tier-2/us/us-austria';

definePageMeta({ path: '/idp-for-us-drivers-in-austria' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usAustriaCopy"
		origin-flag="us"
		destination-flag="at"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-austria"
		id-prefix="us-at-faq"
		illustration="/illustrations/us-austria-hero.png"
		analytics-origin="us"
		analytics-destination="austria"
	/>
</template>
