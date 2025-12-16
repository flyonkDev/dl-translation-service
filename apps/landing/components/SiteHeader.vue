<template>
  <header class="header">
    <div class="header-inner">
      <a href="/" class="logo">
        <span class="logo-mark">DL</span>
        <span class="logo-text">DL Translate</span>
      </a>

      <nav class="nav">
        <a href="#how-it-works" class="nav-link">How it works</a>
        <a href="#faq" class="nav-link">FAQ</a>
        <a href="#pricing" class="nav-link">Pricing</a>
      </nav>

      <a href="/app"class="cta inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-slate-900 shadow-soft transition hover:opacity-95">
        Start application
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(8px);
  background: rgba(249, 250, 251, 0.9);
  border-bottom: 1px solid #e5e7eb;
}

.header-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.logo-mark {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: #22c55e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  color: #022c22;
}

.logo-text {
  font-weight: 700;
  font-size: 15px;
  color: #0f172a;
}

.nav {
  display: flex;
  gap: 16px;
  align-items: center;
}

.nav-link {
  font-size: 14px;
  color: #4b5563;
  text-decoration: none;
}

.nav-link:hover {
  color: #111827;
}

@media (max-width: 720px) {
  .nav {
    display: none;
  }
}
</style>
