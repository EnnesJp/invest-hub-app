<script setup lang="ts">
import LoadingSpinner from '@/components/base/LoadingSpinner.vue';S

interface Props {
  message?: string
  id: string
  isRequesting: boolean
}

const props = withDefaults(defineProps<Props>(), {
  message: 'Are you sure?',
  isRequesting: false,
})

const emit = defineEmits(['close', 'delete'])
</script>

<template>
  <div class="confirmation">
    <div class="confirmation__title">
      <h2>{{ message }}</h2>
    </div>
    <div class="confirmation__actions">
      <button
        class="btn btn--secondary"
        @click="emit('close')"
      >
        Cancel
      </button>
      <button
        class="btn btn--warning"
        @click="emit('delete')"
      >
        <LoadingSpinner v-if="isRequesting" />
        <span v-else>Delete</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.confirmation {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  .confirmation__title {
    color: var(--color-text-modal);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .confirmation__actions {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    width: 100%;
    padding-top: 32px;
    .btn {
      width: 100%;
      display: flex;
      height: 40px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border: none;
      cursor: pointer;
      border-radius: 8px;

      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      font-family: 'Raleway', sans-serif;
    }
    .btn--warning {
      background-color: var(--color-background-btn-warning);
      color: var(--color-text-light);
      font-weight: 500;
      &:hover {
        background-color: var(--color-background-btn-warning-hover);
      }
    }
    .btn--secondary {
      background-color: var(--color-background-button-secondary);
      color: var(--color-text);
      border: 1px solid var(--color-background-button);
      font-weight: 500;
      &:hover {
        background-color: var(--color-background-button);
        color: var(--color-text-light);
      }
    }
  }
}
</style>