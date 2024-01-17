<script setup lang="ts">
interface Props {
  modelValue: string,
  placeholder: string,
  type?: string,
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
      <input
        :type="type"
        class="input"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
        ref="input"
      >
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
    border: 1px solid var(--color-border-input);
    background: var(--color-background);
    box-shadow: 0px 1px 2px 0px var(--color-modal-shadow-4);
  
    .input {
      width: 100%;
      flex: 1 0 0;
      color: var(--color-text-input);;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>