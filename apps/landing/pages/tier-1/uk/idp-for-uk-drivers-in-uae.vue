<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukUaeCopy } from '~/content/country-pairs/tier-1/uk/uk-uae';

definePageMeta({ path: '/idp-for-uk-drivers-in-uae' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukUaeCopy"
		origin-flag="gb"
		destination-flag="ae"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-uae"
		id-prefix="uk-ae-faq"
		illustration="/illustrations/uk-uae-hero.svg"
		analytics-origin="uk"
		analytics-destination="uae"
	/>
</template>
