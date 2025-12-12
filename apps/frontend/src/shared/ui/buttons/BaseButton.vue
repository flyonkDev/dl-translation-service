<template>
  <component
    :is="as"
    :type="as === 'button' ? type : undefined"
    class="base-button"
    :class="[
      `base-button--${variant}`,
      `base-button--${size}`,
      { 'base-button--block': block, 'base-button--loading': loading },
    ]"
    :disabled="as === 'button' ? disabled || loading : undefined"
    @click="onClick"
  >
    <span v-if="loading" class="base-button__spinner" aria-hidden="true" />
    <span class="base-button__label">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'md' | 'sm';

const props = withDefaults(defineProps<{
  as?: 'button' | 'a';
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
}>(), {
  as: 'button',
  type: 'button',
  variant: 'primary',
  size: 'md',
  block: false,
  loading: false,
  disabled: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

function onClick(event: MouseEvent) {
  if (props.loading || props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
}
</script>

<style scoped lang="scss">
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  gap: 8px;
  transition: background-color .15s ease, transform .05s ease, box-shadow .15s ease;
  text-decoration: none;

  &--md { padding: 0.75rem 1.3rem; font-size: 0.95rem; }
  &--sm { padding: 0.55rem 1rem; font-size: 0.85rem; }

  &--block { width: 100%; }

  &--primary {
    background: #facc15;
    color: #0b1a33;

    &:hover { filter: brightness(0.98); }
    &:active { transform: translateY(1px); }
  }

  &--secondary {
    background: #e5e7eb;
    color: #111827;
  }

  &--ghost {
    background: transparent;
    color: #111827;
  }

  &--loading {
    cursor: default;
    opacity: .7;
  }
}

.base-button__spinner {
  width: 1rem;
  height: 1rem;
  border-radius: 999px;
  border: 2px solid rgba(15,23,42,.15);
  border-top-color: rgba(15,23,42,.7);
  animation: spin .6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
