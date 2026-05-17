<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukEgyptCopy } from '~/content/country-pairs/tier-2/uk/uk-egypt';

definePageMeta({ path: '/idp-for-uk-drivers-in-egypt' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukEgyptCopy"
		origin-flag="gb"
		destination-flag="eg"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-egypt"
		id-prefix="uk-eg-faq"
		illustration="/illustrations/uk-egypt-hero.png"
		analytics-origin="uk"
		analytics-destination="egypt"
	/>
</template>
