<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukCyprusCopy } from '~/content/country-pairs/tier-1/uk/uk-cyprus';

definePageMeta({ path: '/idp-for-uk-drivers-in-cyprus' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukCyprusCopy"
		origin-flag="gb"
		destination-flag="cy"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-cyprus"
		id-prefix="uk-cy-faq"
		illustration="/illustrations/uk-cyprus-hero.svg"
		analytics-origin="uk"
		analytics-destination="cyprus"
	/>
</template>
