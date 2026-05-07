<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukPortugalCopy } from '~/content/country-pairs/tier-1/uk/uk-portugal';

definePageMeta({ path: '/idp-for-uk-drivers-in-portugal' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukPortugalCopy"
		origin-flag="gb"
		destination-flag="pt"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-portugal"
		id-prefix="uk-pt-faq"
		illustration="/illustrations/uk-portugal-hero.svg"
		analytics-origin="uk"
		analytics-destination="portugal"
	/>
</template>
