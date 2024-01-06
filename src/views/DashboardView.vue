<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import DashboardOverview from '@/components/dashboard/DashboardOverview.vue';
import DashboardPortfolios from '@/components/dashboard/DashboardPortfolios.vue';
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
  <AuthenticatedLayout>
    <div class="dashboard-view">
      <div class="dashboard-view__top">
        <DashboardOverview
          :total-balance="totalBalance"
          :net-total="netTotal"
          :is-requesting="isRequesting"
        />
        <DashboardPortfolios :portfolios="portfolios" />
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="scss">
.dashboard-view {
  .dashboard-view__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 32px;
    width: 100%;
  }
}
</style>