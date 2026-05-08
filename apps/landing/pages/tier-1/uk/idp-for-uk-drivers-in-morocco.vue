<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukMoroccoCopy } from '~/content/country-pairs/tier-1/uk/uk-morocco';

definePageMeta({ path: '/idp-for-uk-drivers-in-morocco' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukMoroccoCopy"
		origin-flag="gb"
		destination-flag="ma"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-morocco"
		id-prefix="uk-ma-faq"
		illustration="/illustrations/uk-morocco-hero.svg"
		analytics-origin="uk"
		analytics-destination="morocco"
	/>
</template>
