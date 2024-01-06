<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import DashboardOverview from '@/components/dashboard/DashboardOverview.vue';
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
        <div class="dashboard-saving-plans">
          <div class="dashboard-saving-plans-header">
            <div class="dashboard-saving-plans__title">Portfolios</div>
            <div class="dashboard-saving-plans__link">See All</div>
          </div>
          <div class="dashboard-saving-plans__list">
            <div 
              v-for="portfolio in portfolios"
              :key="portfolio.id"
              class="dashboard-saving-plans__item"
            >
              <div class="dashboard-saving-plans__item-title">
                {{ portfolio.name }}
              </div>
              <div class="dashboard-saving-plans__item-value">
                {{ StringHelper.formatCurrencyBR(portfolio.balance) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="scss">
.dashboard-view {
  .dashboard-view__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    gap: 32px;
    width: 100%;
    .dashboard-saving-plans {
      display: flex;
      flex-direction: column;
      width: 347px;
      padding: 16px;
      align-items: flex-start;
      gap: 48px;
      flex-shrink: 0;

      border-radius: 14px;
      background: #FFF;
      .dashboard-saving-plans-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 24px;
        border-bottom: 1px solid #0D163A1a;
        .dashboard-saving-plans__title {
          color: #0D163A;
          font-feature-settings: 'clig' off, 'liga' off;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -1px;
        }
        .dashboard-saving-plans__link {
          color: #4745A4;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
      }
      .dashboard-saving-plans__list {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 24px;
        .dashboard-saving-plans__item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 16px;
          border-radius: 14px;
          background: #F5F5F5;
          .dashboard-saving-plans__item-title {
            color: #0D163A;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .dashboard-saving-plans__item-value {
            color: #0D163A;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>