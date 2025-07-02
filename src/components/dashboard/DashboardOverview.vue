<script setup lang="ts">
import IconWallet from '@/components/icons/dashboard/IconWallet.vue'
import IconSave from '@/components/icons/dashboard/IconSave.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import AnimatedPlaceholder from '@/components/base/AnimatedPlaceholder.vue'

interface Props {
  totalBalance?: number
  netTotal?: number
  isRequesting?: boolean
}

withDefaults(defineProps<Props>(), {
  isRequesting: false,
})
</script>

<template>
  <div class="dashboard-overview">
    <div class="dashboard-overview__title">Overview</div>

    <div class="dashboard-overview__info">
      <div class="dashboard-overview__info-item focus">
        <div class="dashboard-overview__info-item-title">
          <IconWallet />
          Total Balance
        </div>

        <div class="dashboard-overview__info-item-value" v-if="isRequesting">
          <AnimatedPlaceholder
            width="100%"
            height="100%"
            borderRadius="8px"
            colorPrimary="#0D163A33"
            colorSecondary="#0d163a74"
          />
        </div>

        <div class="dashboard-overview__info-item-value" v-else>
          {{ totalBalance  }}
          <IconArrow />
        </div>
      </div>

      <div class="dashboard-overview__info-item">
        <div class="dashboard-overview__info-item-title">
          <IconSave />
          Net Total
        </div>

        <div class="dashboard-overview__info-item-value" v-if="isRequesting">
          <AnimatedPlaceholder
            width="100%"
            height="100%"
            borderRadius="8px"
          />
        </div>

        <div class="dashboard-overview__info-item-value" v-else>
          {{ netTotal }}
          <IconArrow color="#0D163A"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-overview {
  display: flex;
  width: 70%;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;

  border-radius: 14px;
  background: var(--color-background);

  .dashboard-overview__title {
    font-size: 20px;
    font-weight: 600;
    color: var(--color-text);
  }

  .dashboard-overview__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 18px;

    .dashboard-overview__info-item {
      display: flex;
      padding: 20px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      flex: 1 0 0;
      align-self: stretch;
      gap: 24px;

      border-radius: 14px;
      border: 1px solid var(--color-border-dashboard);
      background: var(--color-background);

      &.focus {
        background: var(--color-background-dashboard-focus);
        border: none;

        .dashboard-overview__info-item-title {
          color: var(--color-text-light);
          border-bottom: 1px solid var(--color-border-dashboard-item);
        }
        .dashboard-overview__info-item-value {
          color: var(--color-text-light);
        }
      }

      .dashboard-overview__info-item-title {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 9px;

        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        color: var(--color-text);
        border-bottom: 1px solid var(--color-border-dashboard-dark);
        padding-bottom: 18px;
      }
      
      .dashboard-overview__info-item-value {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -2px;
        font-family: Plus Jakarta Sans;
        color: var(--color-text);
      }
    }
  }
}
</style>