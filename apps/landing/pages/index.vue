<template>
  <div class="page">
    <!-- Hero + plans -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Driver license translation PDF</p>
          <h1 class="hero-title">
            Get your multilingual driver license translation in minutes
          </h1>
          <p class="hero-subtitle">
            Upload your license once – we generate a clean translation PDF in several languages,
            ready to show rental agencies and authorities <strong>together with your national license</strong>.
          </p>

          <ul class="hero-list">
            <li>Automatic text extraction and formatting</li>
            <li>Supports multiple languages (English, Spanish, German, French and more)</li>
            <li>Delivered as a printable &amp; digital PDF</li>
            <li>Translation document only — not a replacement for your license</li>
          </ul>

          <a href="/app" class="hero-cta">
            Start application
          </a>
          <p class="hero-caption">
            From <strong>${{ plans[2].price }}</strong> per document. No subscriptions.
          </p>
        </div>

        <div class="hero-widget" id="pricing">
          <img class="hero-image" src="/widget2.jpg" alt="Driver license translation PDF preview" />

          <h2 class="widget-title">Choose your translation package</h2>

          <ul class="plan-list" role="radiogroup" aria-label="Translation plan">
            <li
              v-for="plan in plans"
              :key="plan.id"
              class="plan-item"
              :class="{ 'is-selected': selectedPlanId === plan.id }"
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
              <label :for="`plan-${plan.id}`" class="plan-row">
                <div class="plan-left">
                  <span class="plan-radio-visual" aria-hidden="true"></span>
                  <span class="plan-title">
                    <span v-if="plan.recommended" class="badge">Most popular</span>
                    {{ plan.label }}
                  </span>
                </div>
                <div class="plan-right">
                  <span class="plan-price">${{ plan.price }}</span>
                </div>
              </label>
            </li>
          </ul>

          <p class="plan-note">
            One-time payment per document.
            You’ll be able to download your translation PDF immediately after payment.
          </p>
        </div>
      </div>
    </section>

    <!-- Who is this for -->
    <section class="section section-muted">
      <div class="section-inner use-cases">
        <div>
          <h2 class="section-title">Who is this for?</h2>
          <ul class="bullet-list">
            <li>Travellers renting cars in non-English speaking countries</li>
            <li>Digital nomads who frequently cross borders</li>
            <li>People with licenses in non-Latin alphabets (Cyrillic, Arabic, etc.)</li>
          </ul>
        </div>
        <div>
          <h2 class="section-title">What you receive</h2>
          <ul class="bullet-list">
            <li>PDF with your key license details translated into several languages</li>
            <li>Clear layout that’s easy to show on your phone or print</li>
            <li>Disclaimer explaining it’s a translation, not an official document</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section id="how-it-works" class="section section-muted-light">
      <div class="section-inner">
        <h2 class="section-title">How it works</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3 class="step-title">Upload your license</h3>
            <p class="step-text">
              Take a clear photo or scan of your driver’s license and upload it to our secure form.
            </p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3 class="step-title">We parse &amp; translate</h3>
            <p class="step-text">
              Our system extracts key fields and places them into a multilingual template in several languages.
            </p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3 class="step-title">Download your PDF</h3>
            <p class="step-text">
              Get a ready-to-print PDF with your details and translation blocks, to use together with your original license.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section">
      <div class="section-inner">
        <h2 class="section-title">Frequently asked questions</h2>

        <ul class="faq-list">
          <li v-for="(item, index) in faqs" :key="item.id" class="faq-item">
            <button
              class="faq-question"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${item.id}`"
              @click="toggle(index)"
            >
              <span>{{ item.question }}</span>
              <span class="faq-chevron" :class="{ open: openIndex === index }">⌄</span>
            </button>

            <transition name="faq">
              <div
                v-show="openIndex === index"
                :id="`faq-panel-${item.id}`"
                role="region"
                class="faq-answer-wrap"
              >
                <div class="faq-answer">
                  <p v-for="(p, i) in item.answer" :key="i">{{ p }}</p>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section section-cta">
      <div class="section-inner cta-inner">
        <div>
          <h2 class="section-title">Ready to translate your license?</h2>
          <p class="cta-text">
            Start your application now – it usually takes just a few minutes to upload your license and receive the translation PDF.
          </p>
        </div>
        <a href="/app" class="hero-cta">
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

<style scoped>
.page {
  min-height: 100vh;
}

/* Hero */

.hero {
  background: #def7d4;
  padding: 40px 16px 60px;
}

.hero-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 32px;
  align-items: flex-start;
}

.hero-copy {
  padding-right: 12px;
}

.eyebrow {
  font-size: 13px;
  font-weight: 600;
  color: #15803d;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  margin-bottom: 8px;
}

.hero-title {
  font-size: 40px;
  line-height: 1.1;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 14px;
}

.hero-subtitle {
  font-size: 15px;
  color: #4b5563;
  margin-bottom: 14px;
}

.hero-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  color: #111827;
  font-size: 14px;
}

.hero-list li {
  position: relative;
  padding-left: 22px;
  margin-bottom: 6px;
}

.hero-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: #16a34a;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 999px;
  background: #facc15;
  color: #0f172a;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
}

.hero-caption {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
}

/* Widget / pricing */

.hero-widget {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.16);
  padding: 18px 18px 20px;
}

.hero-image {
  width: 100%;
  height: 160px;
  object-fit: contain;
  margin-bottom: 12px;
}

.widget-title {
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #0f172a;
}

.plan-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.plan-item {
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.05s ease;
}

.plan-item:hover {
  border-color: #9ca3af;
}

.plan-item.is-selected {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.plan-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.plan-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px 14px 16px;
  gap: 12px;
}

.plan-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.plan-radio-visual {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.plan-radio-visual::after {
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #2563eb;
  transform: scale(0);
  transition: transform 0.12s ease-in-out;
}

.plan-item.is-selected .plan-radio-visual::after {
  transform: scale(1);
}

.plan-title {
  font-size: 14px;
  color: #0f172a;
}

.badge {
  display: inline-block;
  margin-right: 8px;
  padding: 3px 8px;
  border-radius: 999px;
  background: #22c55e;
  color: #022c22;
  font-size: 11px;
  font-weight: 700;
}

.plan-right {
  font-size: 18px;
  font-weight: 800;
  color: #0f172a;
}

.plan-note {
  margin-top: 10px;
  font-size: 12px;
  color: #6b7280;
}

/* Sections */

.section {
  padding: 40px 16px 56px;
  background: #ffffff;
}

.section-muted {
  background: #f9fafb;
}

.section-muted-light {
  background: #f3f4f6;
}

.section-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 18px;
  color: #0f172a;
}

/* Who is this for */

.use-cases {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
}

.bullet-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #4b5563;
}

.bullet-list li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 6px;
}

.bullet-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
}

/* Steps */

.steps {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.step {
  background: #ffffff;
  border-radius: 16px;
  padding: 16px 16px 18px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
}

.step-number {
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: #dcfce7;
  color: #15803d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 8px;
}

.step-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
  color: #0f172a;
}

.step-text {
  font-size: 14px;
  color: #4b5563;
}

/* FAQ */

.faq-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 2px solid #2563eb;
}

.faq-item {
  border-bottom: 1px solid #e5e7eb;
}

.faq-question {
  width: 100%;
  text-align: left;
  padding: 12px 4px;
  background: transparent;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.faq-chevron {
  font-size: 16px;
  transition: transform 0.15s ease;
}

.faq-chevron.open {
  transform: rotate(180deg);
}

.faq-answer-wrap {
  overflow: hidden;
}

.faq-answer {
  padding: 6px 4px 12px;
  font-size: 13px;
  color: #4b5563;
  line-height: 1.6;
}

.faq-enter-active,
.faq-leave-active {
  transition: all 0.15s ease;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Final CTA */

.section-cta {
  background: #def7d4;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.cta-text {
  font-size: 14px;
  color: #4b5563;
  max-width: 520px;
}

/* Responsive */

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: minmax(0, 1fr);
  }
  .use-cases {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 720px) {
  .hero {
    padding: 28px 14px 40px;
  }
  .hero-title {
    font-size: 30px;
  }
  .section {
    padding: 32px 14px 40px;
  }
  .steps {
    grid-template-columns: minmax(0, 1fr);
  }
  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
