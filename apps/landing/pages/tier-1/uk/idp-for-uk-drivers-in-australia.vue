<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukAustraliaCopy } from '~/content/country-pairs/tier-1/uk/uk-australia';

definePageMeta({ path: '/idp-for-uk-drivers-in-australia' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukAustraliaCopy"
		origin-flag="gb"
		destination-flag="au"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-australia"
		id-prefix="uk-au-faq"
		illustration="/illustrations/uk-australia-hero.svg"
		analytics-origin="uk"
		analytics-destination="australia"
	/>
</template>
