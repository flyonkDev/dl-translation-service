<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="open" class="overlay" @click.self="closeOnBackdrop" />
    </Transition>

    <Transition name="pop">
      <div v-if="open" class="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        <div class="panel">
          <header class="dialog__header">
            <h3 id="dialog-title">International Driver’s License — Application</h3>
            <button class="dialog__close" @click="emit('close')" aria-label="Close">✕</button>
          </header>

          <nav class="steps">
            <div class="step" :class="current===2 ? 'is-active' : 'is-done'">1. Select IDP</div>
            <div class="step" :class="current===2 ? 'is-active' : (current>2?'is-done':'')">2. Driver Details</div>
            <div class="step" :class="current===3 ? 'is-active' : ''">3. Verify Identity</div>
            <div class="step">4. Payment</div>
          </nav>

          <section class="content">
            <!-- STEP 2 -->
            <form v-if="current===2" @submit.prevent="onSubmitStep2">
              <div class="grid-2">
                <BaseInput id="firstName" label="First Name" required
                  v-model="firstName" :error="showError(firstNameMeta) ? firstNameError : ''" autocomplete="given-name" />
                <BaseInput id="lastName" label="Last Name" required
                  v-model="lastName" :error="showError(lastNameMeta) ? lastNameError : ''" autocomplete="family-name" />
              </div>

              <BaseInput id="email" label="Email" required type="email"
                v-model="email" :error="showError(emailMeta) ? emailError : ''" autocomplete="email" />

              <div class="fieldset">
                <div class="legend">Date of Birth</div>
                <div class="grid-3">
                  <BaseSelect id="dobDay" label="Day" required placeholder="Day"
                    v-model="dobDay" :options="dayOptions" :error="showError(dobDayMeta) ? dobDayError : ''" />
                  <BaseSelect id="dobMonth" label="Month" required placeholder="Month"
                    v-model="dobMonth" :options="monthOptions" :error="showError(dobMonthMeta) ? dobMonthError : ''" />
                  <BaseSelect id="dobYear" label="Year" required placeholder="Year"
                    v-model="dobYear" :options="yearOptions" :error="showError(dobYearMeta) ? dobYearError : ''" />
                </div>
              </div>

              <BaseSelect id="birthPlace" label="Place of Birth" required placeholder="Select country"
                v-model="birthPlace" :options="countryOptions" :error="showError(birthPlaceMeta) ? birthPlaceError : ''" />

              <div class="footer">
                <button type="button" class="btn btn-secondary" @click="emit('close')">Previous</button>
                <button type="submit" class="btn btn-primary">Next</button>
              </div>
            </form>

            <!-- STEP 3: VERIFY IDENTITY -->
            <form v-else @submit.prevent="onSubmitStep3">
              <p class="muted">Please submit a passport style headshot.</p>

              <div class="grid-2 rows">
                <BaseFile
                  label="Headshot" required accept="image/*"
                  v-model="headshotFile"
                  :error="showError3 && !headshotFile ? 'Headshot is required' : ''"
                />

                <div class="stack">
                  <BaseSelect
                    id="licenseCountry"
                    label="Driver’s License Country of Issue"
                    required
                    v-model="licenseCountry"
                    :options="countryOptions"
                    :error="showError3 && !licenseCountry ? 'Required' : ''"
                  />
                  <p class="hint small">If your country is not available – Please Select Other</p>
                </div>

                <BaseInput id="licenseNumber" label="Driver’s License Number" v-model="licenseNumber" />

                <BaseFile
                  label="Driver’s License" required accept="image/*,.pdf"
                  v-model="licenseFile"
                  hint="Front/back or a combined image/PDF."
                  :error="showError3 && !licenseFile ? 'Driver’s license file is required' : ''"
                />
              </div>

              <div class="app-field">
                <SignaturePad
                  v-model="signatureDataUrl"
                  :height="180"
                  :error="showError3 && !signatureDataUrl ? 'Signature is required' : ''"
                >
                  <template #label><span>Signature <span aria-hidden="true">*</span></span></template>
                </SignaturePad>
              </div>

              <label class="terms">
                <input type="checkbox" v-model="termsAccepted" />
                <span>I agree to the <a href="#" target="_blank" rel="noopener">Terms and Conditions</a></span>
              </label>
              <p v-if="showError3 && !termsAccepted" class="app-error">You must accept the terms</p>

              <div class="footer">
                <button type="button" class="btn btn-secondary" @click="current=2">Previous</button>
                <button type="submit" class="btn btn-primary">Next</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, watch, ref } from 'vue'
import BaseInput from '@/shared/ui/inputs/BaseInput.vue'
import BaseSelect from '@/shared/ui/inputs/BaseSelect.vue'
import SignaturePad from '@/shared/ui/inputs/SignaturePad.vue'
import BaseFile from '@/shared/ui/inputs/BaseFile.vue'
import { useForm, useField } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useIdlAppStore } from '@/stores/idlStore'

const store = useIdlAppStore()

const props = defineProps<{ open: boolean; selectedYears: number }>()
const emit = defineEmits<{
  (e:'close'): void
  (e:'ready:payment'): void
}>()

// esc, overlay
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') emit('close') }
watch(() => props.open, v => { document.body.style.overflow = v ? 'hidden' : '' })
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' })
function closeOnBackdrop() { emit('close') }

// steps
const current = ref<2|3>(2)

// ---- STEP 2 data/validation
const dayOptions = Array.from({ length: 31 }, (_, i) => ({ value: String(i + 1), label: String(i + 1) }))
const monthOptions = ['January','February','March','April','May','June','July','August','September','October','November','December']
  .map((m, i) => ({ value: String(i + 1), label: m }))
const currentYear = new Date().getFullYear()
const yearOptions = Array.from({ length: 100 }, (_, i) => currentYear - i)
  .map(y => ({ value: String(y), label: String(y) }))

const countryOptions = [
  { value: 'United States of America', label: 'United States of America' },
  { value: 'Canada', label: 'Canada' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Australia', label: 'Australia' },
  { value: 'New Zealand', label: 'New Zealand' },
  { value: 'Ireland', label: 'Ireland' },
  { value: 'Germany', label: 'Germany' },
  { value: 'France', label: 'France' },
  { value: 'Spain', label: 'Spain' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'Belgium', label: 'Belgium' },
  { value: 'Sweden', label: 'Sweden' },
  { value: 'Norway', label: 'Norway' },
  { value: 'Denmark', label: 'Denmark' },
  { value: 'Finland', label: 'Finland' },
  { value: 'Switzerland', label: 'Switzerland' },
  { value: 'Austria', label: 'Austria' },
  { value: 'Portugal', label: 'Portugal' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Czech Republic', label: 'Czech Republic' },
  { value: 'Hungary', label: 'Hungary' },
  { value: 'Greece', label: 'Greece' },
  { value: 'Turkey', label: 'Turkey' },
  { value: 'United Arab Emirates', label: 'United Arab Emirates' },
  { value: 'Thailand', label: 'Thailand' },
  { value: 'Vietnam', label: 'Vietnam' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Argentina', label: 'Argentina' },
  { value: 'Brazil', label: 'Brazil' },
]

const schema2 = z.object({
  firstName: z.string().min(2, 'Enter your first name'),
  lastName: z.string().min(2, 'Enter your last name'),
  email: z.string().email('Invalid email'),
  dobDay: z.string().min(1, 'Required'),
  dobMonth: z.string().min(1, 'Required'),
  dobYear: z.string().min(1, 'Required').refine(y => currentYear - Number(y) >= 18, 'You must be 18+'),
  birthPlace: z.string().min(1, 'Required'),
})

const { handleSubmit: handleSubmit2, submitCount, setValues } = useForm({
  validationSchema: toTypedSchema(schema2),
  initialValues: {
    firstName: store.driver?.firstName ?? '',
    lastName: store.driver?.lastName ?? '',
    email: store.driver?.email ?? '',
    dobDay: store.driver?.dobDay ?? '',
    dobMonth: store.driver?.dobMonth ?? '',
    dobYear: store.driver?.dobYear ?? '',
    birthPlace: store.driver?.birthPlace ?? '',
  },
})

const { value: firstName, errorMessage: firstNameError, meta: firstNameMeta } = useField<string>('firstName')
const { value: lastName,  errorMessage: lastNameError,  meta: lastNameMeta }  = useField<string>('lastName')
const { value: email,     errorMessage: emailError,     meta: emailMeta }     = useField<string>('email')
const { value: dobDay,    errorMessage: dobDayError,    meta: dobDayMeta }    = useField<string>('dobDay')
const { value: dobMonth,  errorMessage: dobMonthError,  meta: dobMonthMeta }  = useField<string>('dobMonth')
const { value: dobYear,   errorMessage: dobYearError,   meta: dobYearMeta }   = useField<string>('dobYear')
const { value: birthPlace,errorMessage: birthPlaceError,meta: birthPlaceMeta }= useField<string>('birthPlace')

function showError(meta: { touched: boolean }) { return meta.touched || submitCount.value > 0 }

const onSubmitStep2 = handleSubmit2(vals => {
  const dobISO = `${vals.dobYear}-${String(vals.dobMonth).padStart(2,'0')}-${String(vals.dobDay).padStart(2,'0')}`
  store.setSelectedYears(props.selectedYears)
  store.setDriverDetails({ ...vals, dobISO })
  current.value = 3
})

// ---- STEP 3 data/validation
const headshotFile = ref<File|null>(store.verify?.headshotFile ?? null)
const licenseNumber = ref<string>(store.verify?.licenseNumber ?? '')
const licenseCountry = ref<string>(store.verify?.licenseCountry ?? (store.driver?.birthPlace ?? ''))
const licenseFile = ref<File|null>(store.verify?.licenseFile ?? null)
const signatureDataUrl = ref<string>(store.verify?.signatureDataUrl ?? '')
const termsAccepted = ref<boolean>(store.verify?.termsAccepted ?? false)

const showError3 = ref(false)

function onPickFile(e: Event, type: 'headshot'|'license') {
  const files = (e.target as HTMLInputElement).files
  if (!files || !files.length) { if (type==='headshot') headshotFile.value=null; else licenseFile.value=null; return }
  const f = files[0]
  if (type === 'headshot') headshotFile.value = f
  else licenseFile.value = f
}

async function runLocalPrecheck(file: File) {
  console.log('run local precheck', file)
  // Пример «быстрых» проверок перед отправкой
  const isImage = /^image\/(jpe?g|png|webp|heic)$/i.test(file.type)
  const isPdf = file.type === 'application/pdf'
  const okType = isImage || isPdf
  const okSize = file.size <= 15 * 1024 * 1024
  if (!okType) return { ok: false, reason: 'Unsupported file type' }
  if (!okSize) return { ok: false, reason: 'File too large' }
  return { ok: true }
}

async function verifyOnServer() {
  console.log('verifyOnServer')
  const fd = new FormData()
  if (licenseFile.value) fd.append('license', licenseFile.value)
  fd.append('licenseCountry', licenseCountry.value || '')
  fd.append('licenseNumber',  licenseNumber.value || '')

  const res = await fetch('/api/verify/license', {
    method: 'POST',
    body: fd,
    credentials: 'include'
  })
  if (!res.ok) throw new Error('Verification failed')
  return await res.json()
}

async function onSubmitStep3() {
  console.log('onSubmitStep3')
  showError3.value = true

  // базовые обязательные поля
  if (!headshotFile.value || !licenseCountry.value || !licenseFile.value || !signatureDataUrl.value || !termsAccepted.value) return

  // быстрые client-side проверки
  const [ph, pl] = await Promise.all([
    runLocalPrecheck(headshotFile.value),
    runLocalPrecheck(licenseFile.value),
  ])
  if (!ph.ok) { alert(`Headshot: ${ph.reason}`); return }
  if (!pl.ok) { alert(`License: ${pl.reason}`); return }

  // вызов бэкенда
  try {
    const verification = await verifyOnServer()

    // можно подсветить флаги в UI (например, всплывающий список checks)
    if (verification.status === 'failed') {
      alert('Verification failed. Please re-upload clearer images or check hints.')
      console.log(verification)
      return
    }

    // сохраняем в стор и продолжаем
    store.setVerifyIdentity({
      headshotFile: headshotFile.value,
      licenseNumber: licenseNumber.value.trim(),
      licenseCountry: licenseCountry.value,
      licenseFile: licenseFile.value,
      signatureDataUrl: signatureDataUrl.value,
      termsAccepted: termsAccepted.value,
    })
    emit('ready:payment')
  } catch (e:any) {
    alert(e?.message || 'Server error during verification')
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
.pop-enter-active, .pop-leave-active { transition: transform .18s ease, opacity .18s ease; }
.pop-enter-from, .pop-leave-to { transform: translateY(6px) scale(.98); opacity: 0; }

.overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); z-index: 1000; }
.dialog  { position: fixed; inset: 0; display: grid; place-items: center; z-index: 1001; padding: 12px; }
.panel   { background:#fff; width:min(880px, 94vw); border-radius:16px; box-shadow:0 10px 40px rgba(0,0,0,.18); overflow: hidden; }

.dialog__header { display:flex; align-items:center; justify-content:space-between; padding:14px 16px; border-bottom:1px solid #eee;
  h3{ margin:0; font-size:16px; font-weight:800; color:#0b1a33; }
}
.dialog__close { border:0; background:transparent; font-size:18px; cursor:pointer; line-height:1; }

.steps { display:flex; gap:8px; padding:10px 16px; border-bottom:1px solid #f2f2f5; flex-wrap:wrap; }
.step { padding:6px 10px; border-radius:999px; font-size:12px; background:#f5f7fb; color:#556076; }
.step.is-active { background:#2f7ef4; color:#fff; }
.step.is-done   { background:#38c66b; color:#0e4d24; }

.content { padding:16px; }
.grid-2  { display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap:25px; }
.grid-3  { display:grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap:12px; }
.fieldset { margin: 8px 0 4px; }
.legend   { font-weight:800; font-size:13px; margin-bottom:8px; color:#0b1a33; }

.footer { display:flex; justify-content:space-between; gap:12px; margin-top:16px; }
.btn { border:0; border-radius:12px; padding:12px 18px; font-weight:800; cursor:pointer; }
.btn-primary { background:#ffcf27; color:#0b1a33; }
.btn-secondary { background:#eef2f7; color:#0b1a33; }
.muted { color:#6b7280; margin:0 0 10px; }

.app-field { width:100%; }
.app-label { display:inline-block; font-weight:700; font-size:13px; color:#0b1a33; margin-bottom:6px; }
.app-error { margin:6px 0 0; font-size:12px; color:#c0392b; }
.hint { margin:6px 0 0; font-size:12px; color:#667085; }
.terms { display:flex; align-items:center; gap:8px; margin-top:10px; }

@media (max-width: 720px) { .grid-2, .grid-3 { grid-template-columns:1fr; } }

/* шаг 3 */
.grid-2.rows { 
  grid-template-columns: minmax(0,1fr) minmax(0,1fr); 
  column-gap: 25px; 
  row-gap: 18px;      /* ровные вертикальные отступы между рядами */
}

/* стек для select + helper, чтобы helper был под селектом и выравнивался по сетке */
.stack { display:flex; flex-direction:column; }
.hint.small { margin-top:6px; font-size:12px; color:#8b929d; }
</style>
