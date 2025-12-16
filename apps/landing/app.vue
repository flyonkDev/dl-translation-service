<!-- apps/landing/app.vue -->
<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="app-main">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
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
