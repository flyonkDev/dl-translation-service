<template>
  <header class="header">
    <div class="header-inner flex items-center justify-between gap-4 px-4 py-2.5">
      <a :href="homeHref" class="logo inline-flex items-center gap-2">
        <span class="logo-mark text-sm font-extrabold">DL</span>
        <span class="logo-text text-sm font-bold">DL Translate</span>
      </a>

      <nav class="nav flex items-center gap-4">
        <a :href="howHref" class="nav-link text-sm">How it works</a>
        <a :href="faqHref" class="nav-link text-sm">FAQ</a>
        <a :href="pricingHref" class="nav-link text-sm">Pricing</a>
      </nav>

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
  </header>
</template>

<script setup lang="ts">
import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';

type StartAs = 'a' | 'button';

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
  },
);
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
  max-width: 1120px;
  margin: 0 auto;
}

.logo {
  text-decoration: none;
}

.logo-mark {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: #22c55e;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #022c22;
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
