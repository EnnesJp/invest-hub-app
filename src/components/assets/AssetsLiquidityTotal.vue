<script setup lang="ts">
import StringHelper from '@/helpers/StringHelper'
import type {
  AssetsByLiquidity
} from '@/types/AssetsHelper';

interface Props {
  assets: Array<AssetsByLiquidity>
  isRequesting?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isRequesting: true,
})
</script>

<template>
  <div class="assets-liquidity">
    <div class="assets-liquidity-header">
      <div class="assets-liquidity__title">Assets By Liquidity</div>
    </div>
    <div class="assets-liquidity__list">
      <div 
        v-for="(asset, index) in assets"
        :key="index"
        class="assets-liquidity__item"
      >
        <div class="assets-liquidity__item-title">
          {{ StringHelper.liquidityLabel(asset.liquidity_days) }}
        </div>
        <div class="assets-liquidity__item-value">
          {{ StringHelper.formatCurrencyBR(asset.total_value) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.assets-liquidity {
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 24px;
  height: 100%;

  border-radius: 14px;
  background: var(--color-background);
  .assets-liquidity-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-border-menu-transparent);
    .assets-liquidity__title {
      color: var(--color-text);
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1px;
    }
    .assets-liquidity__link {
      color: var(--color-text-link);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }
  .assets-liquidity__list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    .assets-liquidity__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px;
      border-radius: 14px;
      background: var(--color-background-soft);
      .assets-liquidity__item-title {
        color: var(--color-text);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        font-family: Plus Jakarta Sans;
      }
      .assets-liquidity__item-value {
        color: var(--color-text);
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        font-family: Plus Jakarta Sans;
      }
    }
  }
}
</style>