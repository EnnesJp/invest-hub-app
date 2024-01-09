<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66663 8.00001C6.66663 7.26363 7.26358 6.66667 7.99996 6.66667C8.73634 6.66667 9.33329 7.26363 9.33329 8.00001C9.33329 8.73638 8.73634 9.33334 7.99996 9.33334C7.26358 9.33334 6.66663 8.73638 6.66663 8.00001Z" :fill="color"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3334 8.00001C11.3334 7.26363 11.9303 6.66667 12.6667 6.66667C13.4031 6.66667 14 7.26363 14 8.00001C14 8.73638 13.4031 9.33334 12.6667 9.33334C11.9303 9.33334 11.3334 8.73638 11.3334 8.00001Z" :fill="color"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.00001C2 7.26363 2.59695 6.66667 3.33333 6.66667C4.06971 6.66667 4.66667 7.26363 4.66667 8.00001C4.66667 8.73638 4.06971 9.33334 3.33333 9.33334C2.59695 9.33334 2 8.73638 2 8.00001Z" :fill="color"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  color?: string
}
const props = withDefaults(defineProps<Props>(), {
  color: '#BDBDBD',
})
</script>