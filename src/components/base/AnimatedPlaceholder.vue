<template>
  <div class="placeholder">
    &nbsp;
  </div>
</template>

<script setup lang="ts">

interface Props {
  width?: string
  height?: string
  borderRadius?: string
  colorPrimary?: string
  colorSecondary?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  borderRadius: '0',
  colorPrimary: '#d6d7d8',
  colorSecondary: '#e2e3e4',
})
</script>

<style scoped lang="scss">
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
.placeholder {
  width: v-bind(width);
  height: v-bind(height);
  border-radius: v-bind(borderRadius);
  background-image: linear-gradient(
    to right,
    v-bind(colorPrimary) 0%,
    v-bind(colorSecondary) 10%,
    v-bind(colorPrimary) 20%,
    v-bind(colorPrimary) 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  animation: bgAnimate 1.2s linear infinite;
}
</style>