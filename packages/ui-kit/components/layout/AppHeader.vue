<template>
	<header class="header">
		<div
			class="header-inner container flex flex-nowrap items-center justify-between gap-2 px-4 py-2 sm:gap-3"
		>
			<a :href="homeHref" class="logo inline-flex min-w-0 shrink-0 items-center">
				<img
					:src="brandLogoCompactSrc"
					:alt="brandName"
					class="logo-image logo-image--compact block sm:hidden"
				/>
				<img
					:src="brandLogoFullSrc"
					:alt="brandName"
					class="logo-image logo-image--full hidden sm:block"
				/>
			</a>

			<nav
				v-if="showPrimaryNav"
				class="nav hidden sm:flex min-w-0 flex-1 items-center justify-center gap-2 overflow-x-auto sm:gap-3 md:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			>
				<a :href="howHref" class="nav-link text-sm whitespace-nowrap">{{ navHowLabel }}</a>
				<a :href="faqHref" class="nav-link text-sm whitespace-nowrap">{{ navFaqLabel }}</a>
				<a :href="pricingHref" class="nav-link text-sm whitespace-nowrap">{{ navPricingLabel }}</a>
				<a :href="aboutHref" class="nav-link text-sm whitespace-nowrap">{{ navAboutLabel }}</a>
			</nav>
			<div v-else class="header-spacer hidden sm:block min-w-0 flex-1" aria-hidden="true" />

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
					v-if="showPrimaryNav"
					:nav-how-label="navHowLabel"
					:nav-faq-label="navFaqLabel"
					:nav-pricing-label="navPricingLabel"
					:nav-about-label="navAboutLabel"
					:how-href="howHref"
					:faq-href="faqHref"
					:pricing-href="pricingHref"
					:about-href="aboutHref"
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
	import brandLogoFullSrc from '@ui-kit/assets/branding/idp-logo-header.svg';
	import brandLogoCompactSrc from '@ui-kit/assets/branding/idp-logo-mobile_1.svg';
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
	    navAboutLabel?: string;
	    /**
	     * When false, hide the marketing nav (How / FAQ / Pricing) and the mobile
	     * nav burger. Use on the SPA where those links would take the user out of the flow.
	     */
	    showPrimaryNav?: boolean;
	    showStartButton?: boolean;
	    startLabel?: string;
	    startHref?: string;
	    startAs?: StartAs;
	    startType?: 'button' | 'submit' | 'reset';
	    homeHref?: string;
	    howHref?: string;
	    faqHref?: string;
	    pricingHref?: string;
	    aboutHref?: string;
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
	    navAboutLabel: 'About',

	    showPrimaryNav: true,
	    showStartButton: true,

	    startLabel: 'Start application',
	    startHref: '/apply',
	    startAs: 'a',
	    startType: 'button',

	    homeHref: '/',
	    howHref: '#how-it-works',
	    faqHref: '#faq',
	    pricingHref: '#pricing',
	    aboutHref: '/about',

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
	  height: auto;
	  flex-shrink: 0;
	}

	.logo-image--full {
	  width: clamp(170px, 22vw, 240px);
	}

	.logo-image--compact {
	  width: 44px;
	}

	.nav-link {
	  color: rgb(var(--c-slate-700));
	  text-decoration: none;
	  position: relative;
	  display: inline-flex;
	  align-items: center;
	  padding-bottom: 2px;
	}

	.nav-link:hover {
	  color: rgb(var(--c-slate-900));
	}

	.nav-link::after {
	  content: '';
	  position: absolute;
	  left: 0;
	  bottom: 0;
	  width: 100%;
	  height: 1px;
	  background: rgb(var(--c-sea));
	  transform: scaleX(0);
	  transform-origin: left;
	  transition: transform 0.2s ease;
	}

	.nav-link:hover::after,
	.nav-link:focus-visible::after {
	  transform: scaleX(1);
	}

	.nav {
	  -webkit-overflow-scrolling: touch;
	}
</style>
