<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukMaltaCopy } from '~/content/country-pairs/tier-2/uk/uk-malta';

definePageMeta({ path: '/idp-for-uk-drivers-in-malta' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukMaltaCopy"
		origin-flag="gb"
		destination-flag="mt"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-malta"
		id-prefix="uk-mt-faq"
		illustration="/illustrations/uk-malta-hero.png"
		analytics-origin="uk"
		analytics-destination="malta"
	/>
</template>
