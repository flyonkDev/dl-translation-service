<template>
  <div class="layout">
    <AppHeader />

    <main class="layout-main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/widgets/AppHeader.vue";
import AppFooter from "@/widgets/AppFooter.vue";
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-header,
.layout-footer {
  background: #f5f5f5;
  padding: 1rem;
  text-align: center;
}

.layout-main {
  background: #def7d4;
  margin-bottom: 50px;
}
</style>