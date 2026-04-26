<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usMexicoCopy } from '~/content/country-pairs/us-mexico';

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usMexicoCopy"
		origin-flag="us"
		destination-flag="mx"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-mexico"
		id-prefix="us-mx-faq"
		illustration="/illustrations/us-mexico-hero.svg"
		analytics-origin="us"
		analytics-destination="mexico"
	/>
</template>
