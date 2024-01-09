<template>
  <div class="not-found">
    <div class="not-found-title">404</div>
    <div class="not-found-title">Oops. Nothing here...</div>

    <div class="not-found-btn">
      <router-link to="/dashboard">Go back to Dashboard</router-link>
    </div>  
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .not-found-title {
    font-size: 3rem;
    font-weight: 600;
    color: var(--color-text);
  }
  .not-found-btn {
    margin-top: 1.5rem;
    a {
      color: var(--color-text);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>