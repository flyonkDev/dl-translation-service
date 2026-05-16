<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukFranceCopy } from '~/content/country-pairs/tier-2/uk/uk-france';

definePageMeta({ path: '/idp-for-uk-drivers-in-france' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukFranceCopy"
		origin-flag="gb"
		destination-flag="fr"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-france"
		id-prefix="uk-fr-faq"
		illustration="/illustrations/uk-france-hero.png"
		analytics-origin="uk"
		analytics-destination="france"
	/>
</template>
