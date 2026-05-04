<script setup lang="ts">
import { defineI18nRoute } from '#imports';
import CountryPairPage from '~/components/CountryPair/Page.vue';
import { usCostaRicaCopy } from '~/content/country-pairs/tier-1/us/us-costa-rica';

// File lives in /pages/tier-1/us/ for organisation; URL contract is the flat slug.
definePageMeta({ path: '/idp-for-us-drivers-in-costa-rica' });

// EN + ES (Hispanic-US audience) — like us-spain. RU intentionally skipped.
defineI18nRoute({
	locales: ['en', 'es'],
});
</script>

<template>
	<CountryPairPage
		:copy-by-locale="usCostaRicaCopy"
		origin-flag="us"
		destination-flag="cr"
		issue-country="US"
		canonical-path="/idp-for-us-drivers-in-costa-rica"
		id-prefix="us-cr-faq"
		illustration="/illustrations/us-costa-rica-hero.svg"
		analytics-origin="us"
		analytics-destination="costa-rica"
	/>
</template>
