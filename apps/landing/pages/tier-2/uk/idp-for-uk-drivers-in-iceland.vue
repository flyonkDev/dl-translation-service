<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukIcelandCopy } from '~/content/country-pairs/tier-2/uk/uk-iceland';

definePageMeta({ path: '/idp-for-uk-drivers-in-iceland' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukIcelandCopy"
		origin-flag="gb"
		destination-flag="is"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-iceland"
		id-prefix="uk-is-faq"
		illustration="/illustrations/uk-iceland-hero.png"
		analytics-origin="uk"
		analytics-destination="iceland"
	/>
</template>
