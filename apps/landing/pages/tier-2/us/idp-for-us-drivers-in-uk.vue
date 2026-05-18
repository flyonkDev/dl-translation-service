<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usUkCopy } from '~/content/country-pairs/tier-2/us/us-uk';

definePageMeta({ path: '/idp-for-us-drivers-in-uk' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usUkCopy"
		origin-flag="us"
		destination-flag="gb"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-uk"
		id-prefix="us-gb-faq"
		illustration="/illustrations/us-uk-hero.png"
		analytics-origin="us"
		analytics-destination="uk"
	/>
</template>
