<script setup lang="ts">
import type { CurrencyInputOptions } from 'vue-currency-input'
import { useCurrencyInput } from 'vue-currency-input'

interface Props {
  modelValue: string,
  options: CurrencyInputOptions,
}
const props = defineProps<Props>()

const { inputRef } = useCurrencyInput(props.options)
</script>

<template>
  <div class="input-container">
    <input
      ref="inputRef"
      class="input"
      type="text"
    />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  align-self: stretch;
  padding: 10px 14px;
  align-items: center;
  gap: 8px;
  width: 80%;

  border-radius: 8px;
  border: 1px solid var(--Gray-300, #D0D5DD);
  background: var(--Base-White, #FFF);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  .input {
    width: 100%;
    flex: 1 0 0;
    color: #667085;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    border: none;
    font-family: Plus Jakarta Sans;
    &:focus {
      outline: none;
    }
  }
}
</style>