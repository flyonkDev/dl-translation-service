<template>
  <div class="apply-page">
    <div class="apply-shell">
      <header class="apply-progress">
        <div class="apply-progress__steps">
          <div class="apply-progress__step is-done">
            <span class="index">01</span>
            <span>Information & documents</span>
          </div>
          <div class="apply-progress__step is-active">
            <span class="index">02</span>
            <span>Payment</span>
          </div>
        </div>

        <div class="apply-progress__bar">
          <div class="apply-progress__bar-fill" style="width: 100%" />
        </div>
      </header>

      <main class="apply-main">
        <section class="apply-form">
          <h1 class="page-title">Payment</h1>
          <p class="page-subtitle">
            Stripe integration will be here. For now, this is a placeholder.
          </p>

          <div class="verification-result">
            <p v-if="storedVerification?.status === 'passed'">
              Your document has passed the automatic verification ✅
            </p>
            <p v-else-if="storedVerification?.status === 'review'">
              We’ll review this manually ⚠️
            </p>
            <p v-else>
              Verification info is missing (refresh). You still can download PDF in dev mode.
            </p>
          </div>

          <div class="section-footer">
            <BaseButton variant="secondary" @click="goBack">
              Back to details
            </BaseButton>

            <BaseButton
              variant="secondary"
              :disabled="!applicationId || isDownloading"
              @click="onPreview"
            >
              Preview in browser
            </BaseButton>

            <BaseButton
              variant="primary"
              :loading="isDownloading"
              :disabled="!applicationId || isDownloading"
              @click="onDownload"
            >
              Download PDF
            </BaseButton>
          </div>

          <p v-if="applicationId" class="hint">
            Application ID: {{ applicationId }}
          </p>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { toast } from 'vue-sonner';

import BaseButton from '@ui-kit/components/buttons/BaseButton.vue';
import { useDriverApplicationStore } from '@/entities/driver-application';
import { apiGetBlob } from '@/shared/api/apiClient';
import { API_BASE_URL } from '@/shared/api/httpClient';

const route = useRoute();
const router = useRouter();
const store = useDriverApplicationStore();

const isDownloading = ref(false);

const storedVerification = computed(() => store.verify?.verification ?? null);

function pickParam(v: unknown): string | null {
  if (typeof v === 'string') return v;
  if (Array.isArray(v) && typeof v[0] === 'string') return v[0];
  return null;
}

const applicationId = ref<string | null>(pickParam(route.params.applicationId));

onMounted(async () => {
  if (applicationId.value) {
    store.setApplicationId(applicationId.value);
    sessionStorage.setItem('driverApp.applicationId', applicationId.value);
    return;
  }

  const saved = sessionStorage.getItem('driverApp.applicationId');
  if (saved) {
    applicationId.value = saved;
    store.setApplicationId(saved);
    await router.replace({ name: 'payment', params: { applicationId: saved } });
    return;
  }

  toast.error('Application not found. Please submit again.');
  await router.replace({ name: 'apply' });
});

function goBack() {
  router.push({ name: 'apply' });
}

function makePdfUrl(disposition: 'inline' | 'attachment') {
  const id = applicationId.value;
  if (!id) return null;
  const t = Date.now();
  return `${API_BASE_URL}/applications/${id}/pdf?disposition=${disposition}&t=${t}`;
}

function onPreview() {
  const url = makePdfUrl('inline');
  if (!url) return;
  window.open(url, '_blank');
}

async function onDownload() {
  const id = applicationId.value;
  if (!id) return;

  const url = `/applications/${id}/pdf?disposition=attachment&t=${Date.now()}`;

  try {
    isDownloading.value = true;
    const blob = await apiGetBlob(url);

    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objectUrl;
    a.download = `application-${id}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);

    toast.success('PDF downloaded ✅');
  } catch (e) {
    toast.error('Could not download PDF. Please try again.');
  } finally {
    isDownloading.value = false;
  }
}
</script>

<style scoped lang="scss">
.apply-page {
  background: #f3f4f6;
  padding: 24px 16px 40px;
  min-height: calc(100vh - 350px);
}

.apply-shell {
  max-width: 1120px;
  margin: 0 auto;
  background: $white;
  border-radius: $radius-2xl;
  box-shadow: $shadow-soft;
  padding: 20px 20px 24px;
}

.apply-progress {
  margin-bottom: 16px;
}

.apply-progress__steps {
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
}

.apply-progress__step {
  width: 50%;
  display: flex;
  align-items: center;
  gap: 8px;
  @include text-sm;
  color: $slate-500;

  .index {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    border: 1px solid $slate-200;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 700;
    color: $slate-700;
  }

  &.is-active {
    color: $slate-900;

    .index {
      border-color: #2563eb;
      background: #2563eb;
      color: $white;
    }
  }

  &.is-done {
    color: #16a34a;

    .index {
      border-color: #16a34a;
      background: #bbf7d0;
      color: #16a34a;
    }
  }
}

.apply-progress__bar {
  height: 4px;
  background: $slate-200;
  border-radius: 999px;
  overflow: hidden;
}

.apply-progress__bar-fill {
  height: 100%;
  background: #2563eb;
}

.apply-main {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.section-footer {
  display: flex;
  gap: 10px;
  margin-top: 18px;
  flex-wrap: wrap;
}

.verification-result {
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid $slate-200;
  @include text-sm;
}

.hint {
  margin-top: 12px;
  @include text-xs;
  color: $slate-500;
}
</style>
