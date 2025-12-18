<template>
  <component
    :is="as"
    :type="as === 'button' ? type : undefined"
    class="base-button cursor-pointer inline-flex items-center justify-center gap-2 rounded-full font-bold no-underline transition active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
    :class="[
      sizeClass,
      variantClass,
      { 'w-full': block },
    ]"
    :disabled="as === 'button' ? disabled || loading : undefined"
    :aria-disabled="as !== 'button' ? (disabled || loading) : undefined"
    @click="onClick"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-slate-900/20 border-t-slate-900/70"
      aria-hidden="true"
    />
    <span class="base-button__label">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'sm';

const props = withDefaults(
  defineProps<{
    as?: 'button' | 'a';
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariant;
    size?: ButtonSize;
    block?: boolean;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    as: 'button',
    type: 'button',
    variant: 'primary',
    size: 'md',
    block: false,
    loading: false,
    disabled: false,
  },
);

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'px-4 py-2.5 text-sm';
  return 'px-5 py-3 text-base';
});

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-slate-200 text-slate-900 hover:bg-slate-200/80';
    case 'ghost':
      return 'bg-transparent text-slate-900 hover:bg-slate-200/40';
    case 'primary':
    default:
      return 'bg-orange text-slate-900 hover:bg-orange-300';
  }
});

function onClick(event: MouseEvent) {
  if (props.loading || props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
}
</script>
