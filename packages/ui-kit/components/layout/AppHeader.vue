<template>
	<header class="header">
		<div
			class="header-inner container flex items-center justify-between gap-4 px-4 py-2.5"
		>
			<a :href="homeHref" class="logo inline-flex items-center gap-2">
				<span class="logo-mark text-xs font-extrabold">IDP</span>
				<span class="logo-text text-sm font-bold">IDP Companion</span>
			</a>

			<nav class="nav flex items-center gap-4">
				<a :href="howHref" class="nav-link link-underline text-sm">How it works</a>
				<a :href="faqHref" class="nav-link link-underline text-sm">FAQ</a>
				<a :href="pricingHref" class="nav-link link-underline text-sm">Pricing</a>
			</nav>

			<div class="header-actions flex shrink-0 items-center gap-2 sm:gap-3">
				<div
					v-if="showLocaleSwitcher && localeOptions.length"
					class="locale-switcher flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white/60 p-0.5"
					role="group"
					:aria-label="localeSwitcherAriaLabel"
				>
					<button
						v-for="opt in localeOptions"
						:key="opt.code"
						type="button"
						class="locale-switcher__btn inline-flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-activeBlue/30"
						:class="{
							'bg-mint ring-1 ring-sea/20': locale === opt.code,
						}"
						:title="opt.label"
						:aria-label="opt.label"
						:aria-pressed="locale === opt.code"
						@click="$emit('selectLocale', opt.code)"
					>
						<span
							class="fi h-4 w-5 rounded-sm bg-cover bg-center shadow-sm"
							:class="`fi-${opt.flagCode}`"
							aria-hidden="true"
						/>
					</button>
				</div>

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

	type StartAs = 'a' | 'button';

	export type LocaleOption = {
		code: string;
		label: string;
		/** flag-icons country code, e.g. us, ru, es */
		flagCode: string;
	};

	withDefaults(
	  defineProps<{
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

	.logo-mark {
	  width: 28px;
	  height: 28px;
	  border-radius: 8px;
	  background: rgb(var(--c-sea));
	  display: inline-flex;
	  align-items: center;
	  justify-content: center;
	  color: white;
	  letter-spacing: -0.02em;
	}

	.logo-text {
	  color: rgb(var(--c-slate-900));
	}

	.nav-link {
	  color: rgb(var(--c-slate-700));
	  text-decoration: none;
	}

	.nav-link:hover {
	  color: rgb(var(--c-slate-900));
	}

	@media (max-width: 720px) {
	  .nav {
	    display: none;
	  }
	}
</style>
