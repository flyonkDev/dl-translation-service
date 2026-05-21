<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukNewZealandCopy } from '~/content/country-pairs/tier-2/uk/uk-new-zealand';

definePageMeta({ path: '/idp-for-uk-drivers-in-new-zealand' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukNewZealandCopy"
		origin-flag="gb"
		destination-flag="nz"
		issue-country="UK"
		canonical-path="/idp-for-uk-drivers-in-new-zealand"
		id-prefix="uk-nz-faq"
		illustration="/illustrations/uk-new-zealand-hero.png"
		analytics-origin="uk"
		analytics-destination="new-zealand"
	/>
</template>
