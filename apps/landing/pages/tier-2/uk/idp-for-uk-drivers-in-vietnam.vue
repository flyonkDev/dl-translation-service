<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukVietnamCopy } from '~/content/country-pairs/tier-2/uk/uk-vietnam';

definePageMeta({ path: '/idp-for-uk-drivers-in-vietnam' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukVietnamCopy"
		origin-flag="gb"
		destination-flag="vn"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-vietnam"
		id-prefix="uk-vn-faq"
		illustration="/illustrations/uk-vietnam-hero.png"
		analytics-origin="uk"
		analytics-destination="vietnam"
	/>
</template>
