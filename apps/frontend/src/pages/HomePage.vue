<template>
  <div>
    <div class="widget-page">
      <div class="widget-page__block">
        <h2 class="widget-page__block--title">
          Get Your International Driver’s License in 10 Minutes
        </h2>
        <p class="widget-page__block--text">Valid in 150+ countries. Your Destination Awaits.</p>
        <ul class="widget-page__block__advantages">
          <li class="widget-page__block__advantages--item">Instant Approval</li>
          <li class="widget-page__block__advantages--item">Receive Print and Digital Version</li>
          <li class="widget-page__block__advantages--item">Valid in 150+ Countries</li>
          <li class="widget-page__block__advantages--item">Free ID Card Included</li>
          <li class="widget-page__block__advantages--item">Globally Accepted. Meets International Standards.</li>
          <li class="widget-page__block__advantages--item">Essential for Non-English Speaking Countries</li>
        </ul>
      </div>

      <div class="widget-page__block">
        <div class="license-widget">
          <img class="license-widget__img" src="/widget2.jpg" alt="IDP mockups">
          <ul class="license-widget__options" role="radiogroup" aria-label="License duration">
            <li
              v-for="opt in options"
              :key="opt.id"
              class="license-widget__options--item"
              :class="{ 'is-selected': selectedId === opt.id }"
              @click="selectedId = opt.id"
            >
              <input
                class="radio"
                type="radio"
                :id="`opt-${opt.id}`"
                name="duration"
                :value="opt.id"
                v-model="selectedId"
              />
              <label :for="`opt-${opt.id}`" class="license-row">
                <div class="left">
                  <span class="custom-radio" aria-hidden="true"></span>
                  <span class="title">
                    <span v-if="opt.recommended" class="badge">Recommended</span>
                    Valid for <strong>{{ opt.years }}</strong> {{ opt.years === 1 ? 'year' : 'years' }}
                  </span>
                </div>
                <div class="right">
                  <span class="price">${{ opt.price }}</span>
                </div>
              </label>
            </li>
          </ul>

          <button class="cta" @click="openPopup">Start Application Now</button>
        </div>
      </div>
    </div>

    <section class="faq-page" aria-labelledby="faq-title">
      <div class="faq-container">
        <h3 id="faq-title" class="faq-title">Frequently Asked Questions</h3>

        <ul class="faq-list">
          <li v-for="(q, i) in faqs" :key="q.id" class="faq-item">
            <button
              class="faq-question"
              :aria-expanded="openIndex === i"
              :aria-controls="`faq-panel-${q.id}`"
              @click="toggle(i)"
            >
              <span>{{ q.question }}</span>
              <svg
                class="chevron"
                :class="{ open: openIndex === i }"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <Transition
              @enter="onEnter"
              @after-enter="onAfterEnter"
              @leave="onLeave"
              @after-leave="onAfterLeave"
            >
              <div
                v-show="openIndex === i"
                :id="`faq-panel-${q.id}`"
                role="region"
                class="faq-answer-wrap"
              >
                <div class="faq-answer">
                  <p v-for="(p, pi) in q.answer" :key="pi">{{ p }}</p>
                </div>
              </div>
            </Transition>
          </li>
        </ul>
      </div>
    </section>

    <DriverWidgetPopup
      :open="isPopupOpen"
      :selected-years="selectedOption?.years || 1"
      @close="closePopup"
      @step2:submit="onStep2Submit"
    />
  </div>
</template>

<script setup lang="js">
import { ref, computed } from 'vue'
import DriverWidgetPopup from '@/widgets/DriverWidgetPopup.vue'

const options = [
  { id: 1, years: 3, price: 65, recommended: true },
  { id: 2, years: 2, price: 59, recommended: false },
  { id: 3, years: 1, price: 49, recommended: false },
]
const selectedId = ref(options[0].id)
const selectedOption = computed(() => options.find(o => o.id === selectedId.value))

const faqs = [
  {
    id: 1,
    question: 'What is an IDL Booklet?',
    answer: [
      `An International Driver’s License is a booklet that translates your domestic driver’s license into many languages — making it easier for you to rent vehicles around the world. An International Driver’s License can be thought of as a “Translation Document.” An IDL helps a driver rent and drive vehicles around the world.`,
      `An International Driver’s License is not a replacement for your domestic driver’s license or a passport. Your domestic driver’s license must accompany your IDL in order for it to be valid as your IDL is a translation document.`,
      `Some companies, rental agencies, and authorities may ask to see your IDL while you are driving or renting vehicles so it’s best to keep it with you at all times while abroad.`,
      `We abide by the International Driver’s License Booklet specifications detailed in the UN Convention of 1949. Our IDL comes in 12 languages including English, Spanish, French, German, & Vietnamese.`
    ]
  },
  { id: 2, question: 'Do I need an IDL?', answer: ['Depending on which country you are traveling to or which rental agency you are using, they may request an IDL. The best way to ensure the you are prepared for your travels and that you can drive worldwide, is to have an IDL.'] },
  { id: 3, question: 'Which countries accept the IDL?', answer: ['Most countries accept an IDL if your Domestic Driver’s License is accompanying it. We abide by the International Driver’s License Booklet specifications detailed in the UN Convention of 1949. An IDL is useful in all Non-English speaking countries and especially useful in countries that do not use the English alphabet.Currently, our documents are not accepted in North Korea, South Korea, Japan, Taiwan, Thailand, Spain, and the UAE.'] },
  { id: 4, question: 'How do I apply for an International Driver’s License?', answer: ['To obtain your IDL, you must have a valid domestic driver’s license and a passport-style photo. Complete our short form, upload images of both sides of your domestic driver’s license, provide a passport-style photo, and include your digital signature. Begin your application here.'] },
  { id: 5, question: 'Who is eligible to obtain an IDL?', answer: ['All Nationalities are eligible to apply for an International Driver’s License. You must be 18 years old to apply and you must have a valid domestic driver’s license.'] },
  { id: 6, question: 'How long does it take to get an International Driver’s License?', answer: ['We provide a digital version of your International Driver’s License in minutes when you use instant processing. You’ll receive login access to your account within minutes of applying and your documents will be available for download once you login. With standard processing you will have your documents in 2 hours. For shipping, times can vary worldwide. We provide expedited shipping around the world and overnight shipping within the United States.'] },
  { id: 7, question: 'Is the IDL Recognized Worldwide?', answer: ['Yes. Our IDL is used by travelers around the world to rent and drive vehicles. We are a preferred IDL provider for many rental agencies'] },
  { id: 8, question: 'Drive Overseas', answer: ['Avoid fines & enjoy your trip abroad by renting a vehicle. Whether for business or pleasure, we’ll get you your documents in minutes.'] },
  { id: 9, question: 'Translated into 12 languages.', answer: ['Offered in 12 languages, our IDL simplifies communication with foreign authorities and helps them quickly understand which vehicles you are licensed to drive in your home country and abroad. Our IDL comes in 12 languages including English, Spanish, French, German, & Vietnamese.'] },
  { id: 10, question: 'Expedited Shipping Worldwide', answer: ['We offer many shipping options including Overnight, 2-Day, and Standard Tracking for orders within the United States. For shipping abroad, we also offer expedited and tracking options to ensure you get your printed documents and ID card as soon as possible.'] }
]

// открыт первый
const openIndex = ref(0)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}

function onEnter(el) {
  el.style.height = '0px'
  el.style.opacity = '0'
  el.style.overflow = 'hidden'

  const h = el.scrollHeight
  requestAnimationFrame(() => {
    el.style.transition = 'height 200ms ease, opacity 200ms ease'
    el.style.height = h + 'px'
    el.style.opacity = '1'
  })
}
function onAfterEnter(el) {
  el.style.height = 'auto'
  el.style.transition = ''
  el.style.overflow = ''
}
function onLeave(el) {
  el.style.overflow = 'hidden'
  const h = el.scrollHeight
  el.style.height = h + 'px'
  el.style.opacity = '1'
  requestAnimationFrame(() => {
    el.style.transition = 'height 200ms ease, opacity 200ms ease'
    el.style.height = '0px'
    el.style.opacity = '0'
  })
}
function onAfterLeave(el) {
  el.style.transition = ''
  el.style.overflow = ''
}


const isPopupOpen = ref(false)
function openPopup() { isPopupOpen.value = true }
function closePopup() { isPopupOpen.value = false }

function onStep2Submit(payload) {
  console.log('Step 2 data:', payload) // TODO: persist in store or pass to next step
  // тут позже откроем Step 3 в этом же попапе
}
</script>

<style scoped lang="scss">
$bg: #def7d4;
$card-bg: #fff;
$border: #e7e7ea;
$border-active: #2f7ef4;
$badge-bg: #38c66b;
$badge-text: #0e4d24;
$text: #0b1a33;
$muted: #627083;
$cta-bg: #ffcf27;
$cta-text: #0b1a33;

.widget-page {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  background: $bg;
  padding: 30px 10%;
  align-items: flex-start;
  margin-bottom: 150px;

  &__block {
    width: 50%;
    padding: 0 10px;
    max-width: 820px;

    &:first-child { padding-top: 30px; }

    &--title {
      font-size: 48px;
      line-height: 1.1;
      font-weight: 700;
      margin: 0 0 16px;
      color: $text;
    }
    &--text {
      color: $muted;
      font-size: 16px;
      margin-bottom: 14px;
    }
    &__advantages {
      margin: 0;
      padding: 0;
      list-style: none;

      &--item {
        position: relative;
        padding-left: 28px;
        margin: 8px 0;
        color: $text;
        font-size: 15px;
        &::before {
          content: '✓';
          position: absolute; left: 0; top: 0; line-height: 1;
        }
      }
    }
  }
}

.license-widget {
  max-width: 500px;
  background: $card-bg;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
  padding: 20px;
  display: flex; flex-direction: column; align-items: stretch; gap: 16px;

  &__img { height: 160px; align-self: center; object-fit: contain; }

  &__options {
    margin: 8px 0 0; padding: 0; list-style: none;
    display: flex; flex-direction: column; gap: 10px;

    &--item {
      border: 1px solid $border; border-radius: 12px; background: #fff;
      transition: border-color .2s, box-shadow .2s; cursor: pointer;

      &.is-selected { border-color: $border-active; box-shadow: 0 0 0 4px rgba($border-active, .12); }
      &:hover { border-color: darken($border, 10%); }

      .radio { position: absolute; opacity: 0; pointer-events: none; }
      .license-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 18px; user-select: none; }
      .left { display: flex; align-items: center; gap: 12px; }

      .custom-radio {
        width: 22px; height: 22px; border-radius: 50%; border: 2px solid $border-active;
        display: inline-flex; align-items: center; justify-content: center; position: relative;
        &::after { content: ''; width: 12px; height: 12px; border-radius: 50%; background: $border-active; transform: scale(0); transition: transform .15s ease-in-out; }
      }
      &.is-selected .custom-radio::after { transform: scale(1); }

      .title { font-size: 16px; color: $text; strong { font-weight: 700; } }
      .badge { display: inline-block; margin-right: 10px; padding: 4px 10px; border-radius: 999px; font-size: 12px; font-weight: 700; background: $badge-bg; color: $badge-text; vertical-align: middle; }
      .right .price { font-size: 22px; font-weight: 800; color: $text; min-width: 64px; text-align: right; }
    }
  }

  .cta {
    margin: 0 auto; margin-top: 8px; align-self: flex-start;
    background: $cta-bg; color: $cta-text; font-weight: 700; border: 0; border-radius: 999px;
    padding: 14px 22px; font-size: 16px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
    &:hover { filter: brightness(0.98); }
    &:active { transform: translateY(1px); }
  }
}

.faq-page {
  background: #def7d4;
  padding: 32px 10% 64px;
  display: flex; justify-content: center;
}
.faq-container { width: 100%; max-width: 820px; }
.faq-title {
  text-align: center; font-size: 22px; font-weight: 800; color: $text; margin: 0 0 18px;
}
.faq-list { list-style: none; margin: 0; padding: 0; border-top: 3px solid #2f7ef4; }

.faq-item { border-bottom: 1px solid #ececf2; }

.faq-question {
  width: 100%;
  background: transparent;
  border: 0;
  text-align: left;
  padding: 14px 8px;
  font-size: 14px;
  font-weight: 700;
  color: #1b1f2a;
  display: flex; align-items: center; justify-content: space-between;
  cursor: pointer;
}
.faq-question:focus { outline: 2px solid rgba(#2f7ef4,.25); outline-offset: 2px; }

.chevron { transition: transform .2s ease; color: #1b1f2a; }
.chevron.open { transform: rotate(180deg); }

.faq-answer-wrap {
  overflow: hidden;
}
.faq-answer {
  padding: 8px 8px 16px;
  color: #4c5566;
  font-size: 14px;
  line-height: 1.6;
  p { margin: 0 0 10px; }
}

@media (max-width: 1024px) {
  .widget-page { flex-direction: column; padding: 24px 6%; }
  .widget-page__block { width: 100%; }
  .widget-page__block--title { font-size: 36px !important; }
  .faq-page { padding: 24px 6% 56px; }
}
</style>
