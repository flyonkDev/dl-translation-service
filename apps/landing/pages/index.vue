<template>
  <div class="min-h-screen">
    <!-- Hero + plans -->
    <section class="bg-mint/40 px-4 py-10 md:py-14">
      <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
        <div class="lg:pr-3">
          <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-sea">
            Driver license translation PDF
          </p>

          <h1 class="mb-4 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Get your multilingual driver license translation in minutes
          </h1>

          <p class="mb-4 max-w-xl text-sm leading-relaxed text-slate-700">
            Upload your license once – we generate a clean translation PDF in several languages,
            ready to show rental agencies and authorities
            <strong class="font-semibold text-slate-900">together with your national license</strong>.
          </p>

          <ul class="mb-5 space-y-2 text-sm text-slate-900">
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Automatic text extraction and formatting</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Supports multiple languages (English, Spanish, German, French and more)</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Delivered as a printable &amp; digital PDF</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">✓</span>
              <span>Translation document only — not a replacement for your license</span>
            </li>
          </ul>

          <a
            href="/app"
            class="inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-slate-900 shadow-soft transition hover:opacity-95"
          >
            Start application
          </a>

          <p class="mt-2 text-xs text-slate-500">
            From <strong class="font-semibold text-slate-900">${{ plans[2].price }}</strong> per document. No subscriptions.
          </p>
        </div>

        <!-- Widget -->
        <div id="pricing" class="rounded-2xl bg-white p-5 shadow-soft">
          <img
            class="hero-image mb-3 w-full object-contain"
            src="/widget2.jpg"
            alt="Driver license translation PDF preview"
          />

          <h2 class="mb-3 text-sm font-extrabold text-slate-900">
            Choose your translation package
          </h2>

          <ul class="space-y-2" role="radiogroup" aria-label="Translation plan">
            <li
              v-for="plan in plans"
              :key="plan.id"
              class="plan-item rounded-xl border bg-white transition"
              :class="[
                selectedPlanId === plan.id
                  ? 'is-selected border-sea ring-4 ring-sea/15'
                  : 'border-slate-200 hover:border-slate-500/40'
              ]"
              @click="selectedPlanId = plan.id"
            >
              <input
                class="plan-radio"
                type="radio"
                :id="`plan-${plan.id}`"
                name="plan"
                :value="plan.id"
                v-model="selectedPlanId"
              />

              <label :for="`plan-${plan.id}`" class="flex cursor-pointer items-center justify-between gap-3 px-4 py-3">
                <div class="flex items-center gap-3">
                  <span class="plan-radio-visual border-2 border-sea" aria-hidden="true"></span>

                  <span class="text-sm font-semibold text-slate-900">
                    <span
                      v-if="plan.recommended"
                      class="mr-2 inline-flex items-center rounded-full bg-sea px-2 py-0.5 text-[11px] font-extrabold text-white"
                    >
                      Most popular
                    </span>
                    {{ plan.label }}
                  </span>
                </div>

                <div class="text-lg font-extrabold text-slate-900">
                  ${{ plan.price }}
                </div>
              </label>
            </li>
          </ul>

          <p class="mt-3 text-xs leading-relaxed text-slate-500">
            One-time payment per document.
            You’ll be able to download your translation PDF immediately after payment.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white px-4 py-12 md:py-14">
      <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            Who is this for?
          </h2>

          <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Travellers renting cars in non-English speaking countries</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Digital nomads who frequently cross borders</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>People with licenses in non-Latin alphabets (Cyrillic, Arabic, etc.)</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="mb-4 text-2xl font-extrabold text-slate-900">
            What you receive
          </h2>

          <ul class="space-y-2 text-sm text-slate-700">
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>PDF with your key license details translated into several languages</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Clear layout that’s easy to show on your phone or print</span>
            </li>
            <li class="flex gap-2">
              <span class="text-sea">•</span>
              <span>Disclaimer explaining it’s a translation, not an official document</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section id="how-it-works" class="bg-mint/15 px-4 py-12 md:py-14">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          How it works
        </h2>

        <div class="grid gap-5 md:grid-cols-3">
          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              1
            </div>
            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              Upload your license
            </h3>
            <p class="text-sm leading-relaxed text-slate-700">
              Take a clear photo or scan of your driver’s license and upload it to our secure form.
            </p>
          </div>

          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              2
            </div>
            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              We parse &amp; translate
            </h3>
            <p class="text-sm leading-relaxed text-slate-700">
              Our system extracts key fields and places them into a multilingual template in several languages.
            </p>
          </div>

          <div class="rounded-2xl bg-white p-5 shadow-soft">
            <div class="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-mint text-xs font-extrabold text-sea ring-1 ring-sea/15">
              3
            </div>
            <h3 class="mb-2 text-base font-extrabold text-slate-900">
              Download your PDF
            </h3>
            <p class="text-sm leading-relaxed text-slate-700">
              Get a ready-to-print PDF with your details and translation blocks, to use together with your original license.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="bg-white px-4 py-12 md:py-14">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-6 text-2xl font-extrabold text-slate-900">
          Frequently asked questions
        </h2>

        <ul class="border-t-2 border-sea">
          <li v-for="(item, index) in faqs" :key="item.id" class="border-b border-slate-200">
            <button
              class="flex w-full items-center justify-between gap-4 py-3 text-left text-sm font-semibold text-slate-900"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${item.id}`"
              @click="toggle(index)"
            >
              <span>{{ item.question }}</span>
              <span
                class="select-none text-base transition-transform"
                :class="{ 'rotate-180': openIndex === index }"
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>

            <transition name="faq">
              <div
                v-show="openIndex === index"
                :id="`faq-panel-${item.id}`"
                role="region"
                class="overflow-hidden"
              >
                <div class="pb-4 text-sm leading-relaxed text-slate-700">
                  <p v-for="(p, i) in item.answer" :key="i" class="mb-2 last:mb-0">
                    {{ p }}
                  </p>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="bg-mint/40 px-4 py-10 md:py-12">
      <div class="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 class="mb-2 text-2xl font-extrabold text-slate-900">
            Ready to translate your license?
          </h2>
          <p class="max-w-xl text-sm leading-relaxed text-slate-700">
            Start your application now – it usually takes just a few minutes to upload your license and receive the translation PDF.
          </p>
        </div>

        <a
          href="/app"
          class="inline-flex items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-extrabold text-slate-900 shadow-soft transition hover:opacity-95"
        >
          Start application
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '#imports'

interface Plan {
  id: number
  label: string
  price: number
  recommended?: boolean
}

interface FaqItem {
  id: number
  question: string
  answer: string[]
}

useHead({
  title: 'Driver License Translation PDF — DL Translate',
  meta: [
    {
      name: 'description',
      content:
        'Upload your driver license and get a multilingual translation PDF in minutes. Works as a translation document together with your national license.',
    },
  ],
})

const plans = ref<Plan[]>([
  { id: 1, label: 'Translation to 10 languages', price: 39, recommended: true },
  { id: 2, label: 'Translation to 3 languages', price: 25 },
  { id: 3, label: 'Translation to 1 language', price: 15 },
])

const selectedPlanId = ref<number>(plans.value[0]?.id ?? 1)

const selectedPlan = computed<Plan | undefined>(() =>
  plans.value.find((p) => p.id === selectedPlanId.value),
)

// FAQ content adapted to “translation” concept
const faqs = ref<FaqItem[]>([
  {
    id: 1,
    question: 'Is this an official driver’s license?',
    answer: [
      'No. We do not issue or replace any official driver’s licenses.',
      'We provide a translated PDF that explains your national driver’s license in several languages. It must always be used together with your original license.',
    ],
  },
  {
    id: 2,
    question: 'In which situations is a translation PDF helpful?',
    answer: [
      'When renting a car abroad in a non-English speaking country.',
      'When communicating with local authorities who may not read your original license language.',
    ],
  },
  {
    id: 3,
    question: 'What do I need to apply?',
    answer: [
      'A valid national driver’s license and a clear photo/scan of it.',
      'Optionally, a passport-style photo if you want it to be shown on the PDF.',
    ],
  },
  {
    id: 4,
    question: 'How fast will I receive my document?',
    answer: [
      'For the MVP we focus on digital delivery: you receive a download link and a copy by email shortly after payment.',
      'Later we may add printed booklet and card options.',
    ],
  },
  {
    id: 5,
    question: 'Is my data stored securely?',
    answer: [
      'We only use your data to generate the translation PDF.',
      'In production we will add clear privacy policy, data retention rules and the option to delete your document.',
    ],
  },
])

const openIndex = ref<number>(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<style scoped lang="scss">
/* --- Plan radio visual (оставляем тут, потому что псевдоэлементы удобнее в CSS) --- */
.plan-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.plan-radio-visual {
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.plan-radio-visual::after {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  background: rgb(var(--c-sea));
  transform: scale(0);
  transition: transform 0.12s ease-in-out;
}

.plan-item.is-selected .plan-radio-visual::after {
  transform: scale(1);
}

/* --- FAQ transition (как было, только оставляем минимально) --- */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.15s ease;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}

/* --- Responsive: просил брейкпоинт через $bp-tablet --- */
.hero-image {
  height: 160px;
}

@media (max-width: $bp-tablet) {
  .hero-image {
    height: 140px;
  }
}
</style>
