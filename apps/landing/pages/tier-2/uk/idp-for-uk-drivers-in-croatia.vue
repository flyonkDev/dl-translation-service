<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukCroatiaCopy } from '~/content/country-pairs/tier-2/uk/uk-croatia';

definePageMeta({ path: '/idp-for-uk-drivers-in-croatia' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukCroatiaCopy"
		origin-flag="gb"
		destination-flag="hr"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-croatia"
		id-prefix="uk-hr-faq"
		illustration="/illustrations/uk-croatia-hero.png"
		analytics-origin="uk"
		analytics-destination="croatia"
	/>
</template>
