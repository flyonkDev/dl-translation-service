<template>
  <div class="layout bg-mint/40">
    <AppHeader
      :brand-name="t('layout.logo')"
      :show-primary-nav="false"
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

    <AppFooter
      :brand-name="t('layout.logo')"
      :support-email="supportEmail"
      :popular-title="t('footer.popularTitle')"
      :product-title="t('footer.productTitle')"
      :company-title="t('footer.companyTitle')"
      :support-title="t('footer.supportTitle')"
      :link-pricing="t('footer.linkPricing')"
      :link-how-it-works="t('footer.linkHowItWorks')"
      :link-faq="t('footer.linkFaq')"
      :link-privacy="t('footer.linkPrivacy')"
      :link-terms="t('footer.linkTerms')"
      :link-refund="t('footer.linkRefund')"
      :link-contact="t('footer.linkContact')"
      :copyright-line="t('footer.copyright', { year })"
      :links="footerLinks"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppHeader from '@ui-kit/components/layout/AppHeader.vue';
import AppFooter from '@ui-kit/components/layout/AppFooter.vue';
import { useAppLocale, marketingHash, marketingPath } from '@/shared/lib';
import { isSupportedLocale, type SupportedLocale } from '@i18n';

const { t, locale } = useI18n();
const { currentLocale, selectLocale, localeChoices } = useAppLocale();

const year = new Date().getFullYear();

const supportEmail = String(import.meta.env.VITE_SUPPORT_EMAIL ?? 'petr.shchepetin@gmail.com');

const footerLinks = computed(() => {
  const loc = (isSupportedLocale(locale.value) ? locale.value : 'en') as SupportedLocale;
  return {
    pricing: marketingHash(loc, '#pricing'),
    howItWorks: marketingHash(loc, '#how-it-works'),
    faq: marketingHash(loc, '#faq'),
    privacy: marketingPath(loc, '/privacy-policy'),
    terms: marketingPath(loc, '/terms-of-service'),
    refund: marketingPath(loc, '/refund-policy'),
    contact: marketingHash(loc, '#faq'),
  };
});

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

.layout-main {
  background: #def7d4;
}
</style>
