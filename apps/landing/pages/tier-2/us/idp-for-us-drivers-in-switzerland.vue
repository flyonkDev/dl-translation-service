<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usSwitzerlandCopy } from '~/content/country-pairs/tier-2/us/us-switzerland';

definePageMeta({ path: '/idp-for-us-drivers-in-switzerland' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usSwitzerlandCopy"
		origin-flag="us"
		destination-flag="ch"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-switzerland"
		id-prefix="us-ch-faq"
		illustration="/illustrations/us-switzerland-hero.png"
		analytics-origin="us"
		analytics-destination="switzerland"
	/>
</template>
