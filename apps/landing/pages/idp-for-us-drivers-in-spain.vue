<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usSpainCopy } from '~/content/country-pairs/us-spain';

// EN + ES — Spanish included to capture Hispanic-American audience and
// Latin Americans visiting heritage Spain.
defineI18nRoute({
	locales: ['en', 'es'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usSpainCopy"
		origin-flag="us"
		destination-flag="es"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-spain"
		id-prefix="us-es-faq"
		illustration="/illustrations/us-spain-hero.svg"
		analytics-origin="us"
		analytics-destination="spain"
	/>
</template>
