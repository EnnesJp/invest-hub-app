<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <h1>
    {{ authStore.user.name }}
  </h1>
</template>