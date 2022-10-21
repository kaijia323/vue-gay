<script setup lang="ts">
import type { GayButtonType } from './gayButton'
withDefaults(
  defineProps<{
    type?: GayButtonType
  }>(),
  {
    type: 'primary',
  }
)
</script>

<template>
  <div class="gay-button" :class="type">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.gay-button {
  color: #fff;
  user-select: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
  &.primary {
    width: fit-content;
    padding: 8px 16px;
    background-color: var(--primary-color);
    border-radius: 4px;
  }
}
</style>
