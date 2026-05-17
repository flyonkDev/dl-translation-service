<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { ukTurkeyCopy } from '~/content/country-pairs/tier-2/uk/uk-turkey';

definePageMeta({ path: '/idp-for-uk-drivers-in-turkey' });

defineI18nRoute({
	locales: ['en'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="ukTurkeyCopy"
		origin-flag="gb"
		destination-flag="tr"
		issue-country="GB"
		canonical-path="/idp-for-uk-drivers-in-turkey"
		id-prefix="uk-tr-faq"
		illustration="/illustrations/uk-turkey-hero.png"
		analytics-origin="uk"
		analytics-destination="turkey"
	/>
</template>
