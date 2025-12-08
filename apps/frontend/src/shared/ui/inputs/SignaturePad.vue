<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import SignaturePad from 'signature_pad'

const props = withDefaults(defineProps<{
  modelValue?: string
  error?: string
  height?: number   // px
}>(), { height: 180 })

const emit = defineEmits<{ (e:'update:modelValue', v: string): void }>()
const canvas = ref<HTMLCanvasElement|null>(null)
const box = ref<HTMLElement|null>(null)
let pad: SignaturePad | null = null
let ro: ResizeObserver | null = null

function resizeCanvas() {
  if (!canvas.value || !box.value) return
  const ratio = Math.max(window.devicePixelRatio || 1, 1)
  const w = box.value.clientWidth
  const h = props.height
  canvas.value.width = w * ratio
  canvas.value.height = h * ratio
  canvas.value.style.width = w + 'px'
  canvas.value.style.height = h + 'px'
  const ctx = canvas.value.getContext('2d')!
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
}

function clear() { pad?.clear(); emit('update:modelValue', '') }

onMounted(() => {
  pad = new SignaturePad(canvas.value!, { backgroundColor: '#fff', penColor: '#111' })
  pad.addEventListener('endStroke', () => {
    const data = pad && !pad.isEmpty() ? pad.toDataURL('image/png') : ''
    emit('update:modelValue', data)
  })
  resizeCanvas()
  ro = new ResizeObserver(resizeCanvas)
  ro.observe(box.value!)
  window.addEventListener('resize', resizeCanvas)
})
onBeforeUnmount(() => { ro?.disconnect(); window.removeEventListener('resize', resizeCanvas) })
watch(() => props.modelValue, (v) => { if (!v) pad?.clear() })
</script>

<template>
  <div class="sig-wrap">
    <div class="sig-toolbar">
      <slot name="label">Signature</slot>
      <div class="spacer" />
      <button type="button" class="sig-btn" @click="clear" aria-label="Clear">✕</button>
    </div>
    <div ref="box" class="sig-box">
      <canvas ref="canvas" class="sig-canvas"></canvas>
      <div class="baseline" />
      <button type="button" class="sig-plus" tabindex="-1">+</button>
    </div>
    <p v-if="error" class="sig-error">{{ error }}</p>
  </div>
</template>

<style scoped lang="scss">
.sig-toolbar { display:flex; align-items:center; gap:8px; margin-bottom:6px; font-weight:700; color:#0b1a33; }
.spacer { flex:1; }
.sig-btn { border:0; background:#f3f4f8; border-radius:8px; padding:6px 8px; cursor:pointer; }
.sig-box { position:relative; border:1px solid #e7e7ea; border-radius:10px; overflow:hidden; background:#fff; }
.sig-canvas { display:block; width:100%; height:auto; }
.baseline { position:absolute; left:12px; right:12px; top:60%; height:1px; border-bottom:2px dotted #d6d8de; pointer-events:none; }
.sig-plus { position:absolute; right:8px; top:8px; border:0; background:transparent; color:#b3b9c6; font-size:18px; }
.sig-error { margin:6px 0 0; font-size:12px; color:#c0392b; }
</style>
