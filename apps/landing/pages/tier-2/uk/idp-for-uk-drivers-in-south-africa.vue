<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukSouthAfricaCopy } from '~/content/country-pairs/tier-2/uk/uk-south-africa';

definePageMeta({ path: '/idp-for-uk-drivers-in-south-africa' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukSouthAfricaCopy"
		origin-flag="gb"
		destination-flag="za"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-south-africa"
		id-prefix="uk-za-faq"
		illustration="/illustrations/uk-south-africa-hero.png"
		analytics-origin="uk"
		analytics-destination="south-africa"
	/>
</template>
