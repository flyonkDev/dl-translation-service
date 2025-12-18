<!-- apps/landing/app.vue -->
<template>
  <div class="app-shell">
    <AppHeader :show-start-button="true" start-as="a" start-href="/apply" />
    <main class="app-main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@ui-kit/components/layout/AppFooter.vue';
import AppHeader from "@ui-kit/components/layout/AppHeader.vue";
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  background: #f3f4f6;
}
</style>
