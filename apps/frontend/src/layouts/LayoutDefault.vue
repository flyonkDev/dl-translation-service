<template>
  <div class="layout bg-mint/40">
    <AppHeader :show-start-button="false" />

    <main class="layout-main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@ui-kit/components/layout/AppHeader.vue";
import AppFooter from "@ui-kit/components/layout/AppFooter.vue";
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