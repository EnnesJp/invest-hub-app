<script setup lang="ts">
import type { SelectOption } from '@/types/InputHelper'

interface Props {
  modelValue: string,
  placeholder: string,
  options: SelectOption[],
  label?: string,
}
const props = withDefaults(defineProps<Props>(), {
    type: 'text',
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="base-input">
    <span class="input-label" v-if="label">
      {{ label}}
    </span>
    <div class="input-container">
      <select
        class="input"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
        ref="input"
      >
        <option
          v-for="(option, index) in options"
          :value="option.value"
          :key="index"
          class="input-option"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  .input-label {
    color: var(--color-text);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    width: 20%;
  }
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
      &:focus {
        outline: none;
      }
      .input-option {
        color: var(--color-text);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;

        display: flex;
        padding: 16px;
      }
    }
  }
}
</style>