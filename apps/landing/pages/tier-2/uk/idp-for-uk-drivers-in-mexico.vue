<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukMexicoCopy } from '~/content/country-pairs/tier-2/uk/uk-mexico';

definePageMeta({ path: '/idp-for-uk-drivers-in-mexico' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukMexicoCopy"
		origin-flag="gb"
		destination-flag="mx"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-mexico"
		id-prefix="uk-mx-faq"
		illustration="/illustrations/uk-mexico-hero.png"
		analytics-origin="uk"
		analytics-destination="mexico"
	/>
</template>
