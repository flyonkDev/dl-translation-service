<!-- apps/landing/layouts/default.vue -->
<template>
  <div class="layout">
    <header class="layout-header">
      <div class="layout-header__inner">
        <div class="logo">DL Translate</div>

        <nav class="nav">
          <a href="#how-it-works" class="nav-link">How it works</a>
          <a href="#faq" class="nav-link">FAQ</a>
          <a href="#pricing" class="nav-link">Pricing</a>
        </nav>

        <a href="/app" class="nav-cta">
          Start application
        </a>
      </div>
    </header>

    <main class="layout-main">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/SiteFooter.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header */

.layout-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #ffffff;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(10px);
}

.layout-header__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 16px;
  color: #0f172a;
}

.nav {
  display: flex;
  gap: 16px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  font-size: 13px;
  text-decoration: none;
  color: #475569;
}

.nav-link:hover {
  color: #0f172a;
}

.nav-cta {
  padding: 8px 16px;
  border-radius: 999px;
  background: #facc15;
  color: #0f172a;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}

/* Main */

.layout-main {
  flex: 1;
  background: #def7d4;
}
</style>
