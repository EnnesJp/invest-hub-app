<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Props {
    modelValue: string
}
const props = defineProps<Props>()

defineEmits(['update:modelValue'])

const input = ref<HTMLInputElement>()

onMounted(() => {
    if (input.value?.hasAttribute('autofocus')) {
        input.value?.focus();
    }
});

defineExpose({ focus: () => input.value?.focus() });
</script>

<template>
    <input
        class="text-input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        ref="input"
    />
</template>

<style scoped lang="scss">
.text-input {
    border-color: rgb(209 213 219 / 1);
    border-radius: 0.375rem;
    padding: 8px 12px;
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    &:focus {
        outline: none;
        border-color: rgb(99 102 241 / 1);
    }
}
</style>