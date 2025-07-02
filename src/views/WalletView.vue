<script setup lang="ts">
import AssetsTable from '@/components/assets/AssetsTable.vue';
import AssetsLiquidityTotal from '@/components/assets/AssetsLiquidityTotal.vue';
import assetsService from '@/api/modules/assets';
import type { Asset, AssetsByLiquidity } from '@/types/AssetsHelper';
import { ref, onMounted } from 'vue';

const { list } = assetsService()
const assets = ref([])
const isRequesting = ref(true)
const assetsByLiquidity = ref([] as Array<AssetsByLiquidity>)

function setList() {
  assetsByLiquidity.value = []
  assets.value.forEach((asset: Asset) => {
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
}

const getAssetsData = () => {
  isRequesting.value = true
  list()
    .then((response: any) => {
      assets.value = response.content.data.filter((transaction: any) => transaction.value != 0)
      setList()
    })
    .finally(() => {
      isRequesting.value = false
    })
}

onMounted(() => {
  getAssetsData()
})
</script>

<template>
  <div class="wallet">
    <div class="wallet-left">
      <AssetsTable
        :assets="assets"
        :isRequesting="isRequesting"
        @updateAssets="getAssetsData"
      />
    </div>

    <div class="wallet-right">
      <AssetsLiquidityTotal
        :assets="assetsByLiquidity"
        :isRequesting="isRequesting"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wallet {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 16px;
  gap: 24px;
  .wallet-left {
    display: flex;
    flex-direction: column;
    width: 73%;
    gap: 24px;
  }
  .wallet-right {
    display: flex;
    flex-direction: column;
    width: 27%;
    gap: 24px;
  }
}
</style>