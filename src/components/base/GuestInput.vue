<script setup lang="ts">
import InputIcons from './InputIcons.vue';
import { ref } from 'vue';

interface Props {
    modelValue: string,
    placeholder: string,
    icon: string,
    type?: string,
}
const props = withDefaults(defineProps<Props>(), {
    type: 'text',
})

defineEmits(['update:modelValue'])

const showPassword = ref(false);

function togglePassword() {
  if (props.type !== 'password') return;

  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="input-container">
      <input
          :type="showPassword ? 'text' : props.type"
          class="input"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target?.value)"
          ref="input"
      >

      <InputIcons
        :icon="icon"
        :showPassword="showPassword"
        @click="togglePassword"  
      />
  </div>
</template>

<style scoped lang="scss">
.input-container {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #FFF;
  width: 100%;

  .input {
    width: 100%;
    height: 48px;
    background-color: transparent;
    border: none;
    
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: #FFF;
    }

    &:focus {
      outline: none;
    }
  }

  .input-icon {
    &.password {
      cursor: pointer;
    }
    &.small {
      width: 24px;
      height: 24px;
    }
  }
} 
</style>