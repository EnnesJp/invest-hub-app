<script setup lang="ts">
import DashboardOverview from '@/components/dashboard/DashboardOverview.vue';
import DashboardPortfolios from '@/components/dashboard/DashboardPortfolios.vue';
import DashboardSavingPlans from '@/components/dashboard/DashboardSavingPlans.vue';
import DashboardChart from '@/components/dashboard/DashboardChart.vue';
import portfolioService from '@/api/modules/portfolios';
import StringHelper from '@/helpers/StringHelper';
import { ref, onMounted } from 'vue';

const { list } = portfolioService()

const portfolios = ref([])
const totalBalance = ref(0)
const netTotal = ref(0)
const isRequesting = ref(true)

onMounted(() => {
  list()
    .then((response: any) => {
      portfolios.value = response.content.data
      totalBalance.value = StringHelper.formatCurrencyBR(response.content.meta.total_balance)
      netTotal.value = StringHelper.formatCurrencyBR(
        response.content.meta.total_balance - response.content.meta.total_tax
      )
    })
    .finally(() => {
      isRequesting.value = false
    })
})
</script>

<template>
  <div class="dashboard-view">
    <div class="dashboard-view__top">
      <DashboardOverview
        :total-balance="totalBalance"
        :net-total="netTotal"
        :is-requesting="isRequesting"
      />

      <DashboardPortfolios :portfolios="portfolios" />
    </div>

    <div class="dashboard-view__bottom">
      <DashboardChart />
      <DashboardSavingPlans />
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-view {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .dashboard-view__top {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
  }

  .dashboard-view__bottom {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
  }
}
</style>