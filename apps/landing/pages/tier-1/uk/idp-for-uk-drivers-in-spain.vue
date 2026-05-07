<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukSpainCopy } from '~/content/country-pairs/tier-1/uk/uk-spain';

// File lives in /pages/tier-1/uk/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-uk-drivers-in-spain' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukSpainCopy"
		origin-flag="gb"
		destination-flag="es"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-spain"
		id-prefix="uk-es-faq"
		illustration="/illustrations/uk-spain-hero.svg"
		analytics-origin="uk"
		analytics-destination="spain"
	/>
</template>
