<script setup lang="ts">
import IconDots from '@/components/icons/IconDots.vue';
import { ref } from 'vue';

interface Props {
  id: string,
}

const props = defineProps<Props>()
const showDropdown = ref(false)
</script>

<template>
  <IconDots
    class="action-button"
    @click="showDropdown = !showDropdown"
  />
  <div
    class="action-button-dropdown"
    v-if="showDropdown"
  >
    <div class="action-button-dropdown__item">
      <span class="action-button-dropdown__item-title">Edit</span>
    </div>
    <div class="action-button-dropdown__item">
      <span class="action-button-dropdown__item-title">Delete</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.action-button {
  width: 24px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    border: 1px solid var(--color-border-table-hover);
  }
}
.action-button-dropdown {
  position: absolute;
  top: 20px;
  right: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 8px;
  width: 120px;
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0px 4px 4px var(--color-shadow-dropdown);
  z-index: 1;
  .action-button-dropdown__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    &:hover {
      background-color: var(--color-background-button-hover);
      cursor: pointer;
    }
    .action-button-dropdown__item-title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      font-family: 'Raleway', sans-serif;
      color: var(--color-text);
    }
  }
}
</style>