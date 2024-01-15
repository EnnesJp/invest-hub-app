<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import AssetsTable from '@/components/assets/AssetsTable.vue';
import AssetsLiquidityTotal from '@/components/assets/AssetsLiquidityTotal.vue';
import assetsService from '@/api/modules/assets';
import { ref, onMounted } from 'vue';

const { list } = assetsService()
const assets = ref([])
const isRequesting = ref(true)

onMounted(() => {
  list()
    .then((response: any) => {
      assets.value = response.content.data.filter((transaction: any) => transaction.value != 0)
    })
    .finally(() => {
      isRequesting.value = false
    })
})
</script>

<template>
  <AuthenticatedLayout>
    <div class="wallet">
      <div class="wallet-left">
        <AssetsTable
          :assets="assets"
          :isRequesting="isRequesting"
        />
      </div>
      <div class="wallet-right">
        <AssetsLiquidityTotal
          :assets="assets"
          :isRequesting="isRequesting"
        />
      </div>
    </div>
  </AuthenticatedLayout>
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