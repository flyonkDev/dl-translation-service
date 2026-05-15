<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usVietnamCopy } from '~/content/country-pairs/tier-2/us/us-vietnam';

definePageMeta({ path: '/idp-for-us-drivers-in-vietnam' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usVietnamCopy"
		origin-flag="us"
		destination-flag="vn"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-vietnam"
		id-prefix="us-vn-faq"
		illustration="/illustrations/us-vietnam-hero.png"
		analytics-origin="us"
		analytics-destination="vietnam"
	/>
</template>
