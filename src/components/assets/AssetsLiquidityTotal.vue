<script setup lang="ts">
import StringHelper from '@/helpers/StringHelper'
import type {
  Asset,
  AssetsByLiquidity
} from '@/types/AssetsHelper';
import { ref, onMounted } from 'vue';

interface Props {
  assets?: Array<Asset>
  isRequesting?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  assets: () => [] as Array<Asset>,
  isRequesting: true,
})

const assetsByLiquidity = ref([] as Array<AssetsByLiquidity>)

onMounted(() => {
  props.assets.forEach(asset => {
    if (assetsByLiquidity.value.some(item => item.liquidity_days === asset.liquidity_days)) {
      const index = assetsByLiquidity.value.findIndex(item => item.liquidity_days === asset.liquidity_days)
      assetsByLiquidity.value[index].total_value += asset.value
      assetsByLiquidity.value[index].total_income_tax += asset.income_tax
      return
    }

    assetsByLiquidity.value.push({
      liquidity_days: asset.liquidity_days,
      total_value: asset.value,
      total_income_tax: asset.income_tax,
    })
  });

  assetsByLiquidity.value.sort((a, b) => a.liquidity_days - b.liquidity_days)
})
</script>

<template>
  <div class="assets-liquidity">
    <div class="assets-liquidity-header">
      <div class="assets-liquidity__title">Assets By Liquidity</div>
    </div>
    <div class="assets-liquidity__list">
      <div 
        v-for="(asset, index) in assetsByLiquidity"
        :key="index"
        class="assets-liquidity__item"
      >
        <div class="assets-liquidity__item-title">
          D +{{ asset.liquidity_days }}
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
      font-weight: 700;
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