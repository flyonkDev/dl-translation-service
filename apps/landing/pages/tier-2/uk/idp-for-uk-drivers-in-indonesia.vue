<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukIndonesiaCopy } from '~/content/country-pairs/tier-2/uk/uk-indonesia';

definePageMeta({ path: '/idp-for-uk-drivers-in-indonesia' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukIndonesiaCopy"
		origin-flag="gb"
		destination-flag="id"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-indonesia"
		id-prefix="uk-id-faq"
		illustration="/illustrations/uk-indonesia-hero.png"
		analytics-origin="uk"
		analytics-destination="indonesia"
	/>
</template>
