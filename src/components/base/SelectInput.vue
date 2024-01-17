<script setup lang="ts">
import type { SelectOption } from '@/types/InputHelper'
import IconSelectArrow from '../icons/IconSelectArrow.vue';
import { ref } from 'vue'

interface Props {
  modelValue: string,
  placeholder: string,
  options: SelectOption[],
  label?: string,
}
const props = defineProps<Props>()

const showOptions = ref(false)
const selectedOption = ref<SelectOption | null>(null)
const placeholder = props.placeholder
const emit = defineEmits(['update:modelValue'])

function selectOption(option: SelectOption) {
  showOptions.value = false
  selectedOption.value = option
  emit('update:modelValue', option.value)
}
</script>

<template>
  <div class="select-input">
    <span class="input-label" v-if="label">
      {{ label}}
    </span>
    <div class="select-input-container">
      <div
        class="input-container"  
        @click="showOptions = !showOptions"
      >
        <div
          class="input"
          :placeholder="placeholder"
          :value="modelValue"
          ref="input"
        >
          {{ selectedOption?.label ?? placeholder }}
        </div>
        <IconSelectArrow
          class="input-icon"
          :class="{ 'input-icon--active': showOptions }"
        />
      </div>
      <div
        class="input-options-container"
        v-if="showOptions"
      >
        <div
          class="input-option"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.select-input {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
  position: relative;
  .input-label {
    color: var(--color-text);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    width: 20%;
  }
  .select-input-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    .input-container {
      display: flex;
      align-self: stretch;
      padding: 10px 14px;
      align-items: center;
      gap: 8px;
    
      border-radius: 8px;
      border: 1px solid var(--Gray-300, #D0D5DD);
      background: var(--Base-White, #FFF);
      box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
      .input-icon {
        transition: 0.5s;
        &.input-icon--active {
          transform: rotate(180deg);
        }
      }
      .input {
        width: 100%;
        flex: 1 0 0;
        color: #667085;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        border: none;
        min-height: 24px;
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
  .input-options-container {
    display: flex;
    flex-direction: column;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--Gray-300, #D0D5DD);
    background: var(--Base-White, #FFF);
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    position: absolute;
    top: 48px;
    width: 78%;
    max-height: 300px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: var(--color-background-scrollbar-track);
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-background-scrollbar-thumb);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-background-scrollbar-thumb-hover);
    }
    .input-option {
      color: var(--color-text);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;

      display: flex;
      padding: 16px;
      border-radius: 8px;

      &:hover {
        background: var(--color-background-select-input-hover);
      }
    }
  }
}
</style>