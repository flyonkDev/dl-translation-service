<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukDominicanRepublicCopy } from '~/content/country-pairs/tier-2/uk/uk-dominican-republic';

definePageMeta({ path: '/idp-for-uk-drivers-in-dominican-republic' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukDominicanRepublicCopy"
		origin-flag="gb"
		destination-flag="do"
		issue-country="UK"
		canonical-path="/idp-for-uk-drivers-in-dominican-republic"
		id-prefix="uk-do-faq"
		illustration="/illustrations/uk-dominican-republic-hero.png"
		analytics-origin="uk"
		analytics-destination="dominican-republic"
	/>
</template>
