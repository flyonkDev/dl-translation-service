<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usItalyCopy } from '~/content/country-pairs/us-italy';

// EN-only — RU/ES audiences not relevant for "US drivers in Italy" search intent.
defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usItalyCopy"
		origin-flag="us"
		destination-flag="it"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-italy"
		id-prefix="us-it-faq"
		illustration="/illustrations/us-italy-hero.svg"
		analytics-origin="us"
		analytics-destination="italy"
	/>
</template>
