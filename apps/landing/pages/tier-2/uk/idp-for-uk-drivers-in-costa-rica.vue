<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukCostaRicaCopy } from '~/content/country-pairs/tier-2/uk/uk-costa-rica';

definePageMeta({ path: '/idp-for-uk-drivers-in-costa-rica' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukCostaRicaCopy"
		origin-flag="gb"
		destination-flag="cr"
		issue-country="UK"
		canonical-path="/idp-for-uk-drivers-in-costa-rica"
		id-prefix="uk-cr-faq"
		illustration="/illustrations/uk-costa-rica-hero.png"
		analytics-origin="uk"
		analytics-destination="costa-rica"
	/>
</template>
