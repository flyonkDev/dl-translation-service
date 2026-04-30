<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usFranceCopy } from '~/content/country-pairs/tier-2/us/us-france';

// Override file-based routing — file lives in /pages/tier-2/us/ for organisation,
// but URL contract is the flat slug. Never change this once published.
definePageMeta({ path: '/idp-for-us-drivers-in-france' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usFranceCopy"
		origin-flag="us"
		destination-flag="fr"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-france"
		id-prefix="us-fr-faq"
		illustration="/illustrations/us-france-hero.svg"
		analytics-origin="us"
		analytics-destination="france"
	/>
</template>
