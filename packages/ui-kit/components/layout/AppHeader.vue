<template>
	<header class="header">
		<div
			class="header-inner container flex flex-nowrap items-center justify-between gap-2 px-4 py-2 sm:gap-3"
		>
			<a :href="homeHref" class="logo inline-flex min-w-0 shrink-0 items-center">
				<img :src="brandLogoSrc" :alt="brandName" class="logo-image" />
			</a>

			<nav
				class="nav hidden sm:flex min-w-0 flex-1 items-center justify-center gap-2 overflow-x-auto sm:gap-3 md:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				<a :href="howHref" class="nav-link link-underline text-sm whitespace-nowrap">{{ navHowLabel }}</a>
				<a :href="faqHref" class="nav-link link-underline text-sm whitespace-nowrap">{{ navFaqLabel }}</a>
				<a :href="pricingHref" class="nav-link link-underline text-sm whitespace-nowrap">{{ navPricingLabel }}</a>
			</nav>

			<div class="header-actions flex shrink-0 items-center gap-2 sm:gap-3">
				<slot name="localeSwitcher">
					<LocaleSwitcher
						v-if="showLocaleSwitcher && localeOptions.length"
						:locale="locale"
						:options="localeOptions"
						:aria-label="localeSwitcherAriaLabel"
						@select-locale="$emit('selectLocale', $event)"
					/>
				</slot>

				<MobileNavMenu
					:nav-how-label="navHowLabel"
					:nav-faq-label="navFaqLabel"
					:nav-pricing-label="navPricingLabel"
					:how-href="howHref"
					:faq-href="faqHref"
					:pricing-href="pricingHref"
				/>

				<BaseButton
					v-if="showStartButton"
					:as="startAs"
					:type="startAs === 'button' ? startType : undefined"
					:href="startAs === 'a' ? startHref : undefined"
					variant="primary"
				>
					<span class="font-bold">{{ startLabel }}</span>
				</BaseButton>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
	import brandLogoSrc from '@ui-kit/assets/branding/logo_1_black.svg';
	import LocaleSwitcher from './LocaleSwitcher.vue';
	import MobileNavMenu from './MobileNavMenu.vue';

	type StartAs = 'a' | 'button';

	export type LocaleOption = {
		code: string;
		label: string;
		/** flag-icons country code, e.g. us, ru, es */
		flagCode: string;
	};

	withDefaults(
	  defineProps<{
	    brandName?: string;
	    navHowLabel?: string;
	    navFaqLabel?: string;
	    navPricingLabel?: string;
	    showStartButton?: boolean;
	    startLabel?: string;
	    startHref?: string;
	    startAs?: StartAs;
	    startType?: 'button' | 'submit' | 'reset';
	    homeHref?: string;
	    howHref?: string;
	    faqHref?: string;
	    pricingHref?: string;
	    showLocaleSwitcher?: boolean;
	    /** Current locale code (e.g. en, ru, es) */
	    locale?: string;
	    localeOptions?: LocaleOption[];
	    localeSwitcherAriaLabel?: string;
	  }>(),
	  {
	    brandName: 'IDP Companion',
	    navHowLabel: 'How it works',
	    navFaqLabel: 'FAQ',
	    navPricingLabel: 'Pricing',

	    showStartButton: true,

	    startLabel: 'Start application',
	    startHref: '/apply',
	    startAs: 'a',
	    startType: 'button',

	    homeHref: '/',
	    howHref: '#how-it-works',
	    faqHref: '#faq',
	    pricingHref: '#pricing',

	    showLocaleSwitcher: false,
	    locale: 'en',
	    localeOptions: () => [],
	    localeSwitcherAriaLabel: 'Language',
	  },
	);

	defineEmits<{
		selectLocale: [code: string];
	}>();
</script>

<style scoped>
	.header {
	  position: sticky;
	  top: 0;
	  z-index: 20;
	  backdrop-filter: blur(8px);
	  background: rgba(249, 250, 251, 0.9);
	  border-bottom: 1px solid rgb(var(--c-slate-200));
	}

	.header-inner {
	  max-width: 1280px;
	  margin: 0 auto;
	}

	.logo {
	  text-decoration: none;
	}

	.logo-image {
	  width: clamp(160px, 22vw, 230px);
	  height: auto;
	  display: block;
	  flex-shrink: 0;
	}

	.nav-link {
	  color: rgb(var(--c-slate-700));
	  text-decoration: none;
	}

	.nav-link:hover {
	  color: rgb(var(--c-slate-900));
	}

	.nav {
	  -webkit-overflow-scrolling: touch;
	}
</style>
