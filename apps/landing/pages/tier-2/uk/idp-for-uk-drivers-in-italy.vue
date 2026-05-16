<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukItalyCopy } from '~/content/country-pairs/tier-2/uk/uk-italy';

definePageMeta({ path: '/idp-for-uk-drivers-in-italy' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukItalyCopy"
		origin-flag="gb"
		destination-flag="it"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-italy"
		id-prefix="uk-it-faq"
		illustration="/illustrations/uk-italy-hero.png"
		analytics-origin="uk"
		analytics-destination="italy"
	/>
</template>
