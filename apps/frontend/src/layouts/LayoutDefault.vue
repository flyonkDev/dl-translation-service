<template>
  <div class="layout bg-mint/40">
    <AppHeader
      :show-start-button="false"
      show-locale-switcher
      :locale="currentLocale"
      :locale-options="localeChoicesForHeader"
      :locale-switcher-aria-label="t('header.language')"
      @select-locale="onSelectLocale"
    />

    <main class="layout-main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '@ui-kit/components/layout/AppHeader.vue';
import AppFooter from '@ui-kit/components/layout/AppFooter.vue';
import { useAppLocale } from '@/shared/lib';
import { isSupportedLocale } from '@i18n';

const { t } = useI18n();
const { currentLocale, selectLocale, localeChoices } = useAppLocale();

const localeChoicesForHeader = computed(() =>
  localeChoices.map((o) => ({
    code: o.code,
    label: o.label,
    flagCode: o.flagCode,
  })),
);

function onSelectLocale(code: string) {
  if (isSupportedLocale(code)) selectLocale(code);
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-header,
/* .layout-footer {
  background: #f5f5f5;
  padding: 1rem;
  text-align: center;
} */

.layout-main {
  background: #def7d4;
}
</style>