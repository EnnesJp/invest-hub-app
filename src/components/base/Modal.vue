<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import IconClose from '@/components/icons/modal/IconClose.vue';
import IconSelector from '@/components/icons/modal/IconSelector.vue';

interface Props {
  show?: boolean
  title: string
  subtitle?: string
  width?: string
  icon?: string
  iconBorder?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  width: '300px',
  icon: 'success',
  iconBorder: false,
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div
        class="modal-container"
        :style="{ width }"
      >
        <div class="modal-header">
          <IconSelector
            class="modal-header__icon"
            :class="{ 'modal-header__icon--border': iconBorder }"
            :icon="icon"
          />
          <div class="modal-header-wrapper">
            <div class="modal-header-info">
              <span class="modal-header__title">{{ title }}</span>
              <span class="modal-header__subtitle" v-if="subtitle">{{ subtitle }}</span>
            </div>
            <IconClose class="modal-header__close-button" @click="$emit('close')" />
          </div>
        </div>

        <div class="modal-body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
  .modal-container {
    margin: auto;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.3s ease;
    border-radius: 12px;
    box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.10);
    .modal-header {
      display: flex;
      flex-direction: row;
      gap: 16px;
      padding: 20px 30px;
      border-bottom: 1px solid #E4E7EC;
      .modal-header__icon {
        display: flex;
        width: 48px;
        height: 48px;
        padding: 12px;
        justify-content: center;
        align-items: center;
        &.modal-header__icon--border {
          border-radius: 10px;
          border: 1px solid var(--Gray-200, #E4E7EC);
          background: var(--Base-White, #FFF);

          /* Shadow / xs */
          box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        }
      }
      .modal-header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .modal-header-info {
          display: flex;
          flex-direction: column;
          .modal-header__title {
            color: var(--color-text);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
          }
          .modal-header__subtitle {
            color: var(--color-text-soft);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          }
        }
        .modal-header__close-button {
          cursor: pointer;
        }
      }
    }
    
    .modal-body {
      padding: 20px 30px;
    }
  }
}



</style>