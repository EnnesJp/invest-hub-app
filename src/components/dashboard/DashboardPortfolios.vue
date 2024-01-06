<script setup lang="ts">
import StringHelper from '@/helpers/StringHelper'
import { Portfolio } from '@/components/dashboard/DashboardHelper'
import { defineProps, withDefaults } from 'vue'

interface Props {
  portfolios?: Array<Portfolio>
}

const props = withDefaults(defineProps<Props>(), {
  portfolios: () => [] as Array<Portfolio>,
})
</script>

<template>
  <div class="dashboard-portfolios">
    <div class="dashboard-portfolios-header">
      <div class="dashboard-portfolios__title">Portfolios</div>
      <div class="dashboard-portfolios__link">See All</div>
    </div>
    <div class="dashboard-portfolios__list">
      <div 
        v-for="portfolio in portfolios"
        :key="portfolio.id"
        class="dashboard-portfolios__item"
      >
        <div class="dashboard-portfolios__item-title">
          {{ portfolio.name }}
        </div>
        <div class="dashboard-portfolios__item-value">
          {{ StringHelper.formatCurrencyBR(portfolio.balance) }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-portfolios {
  display: flex;
  flex-direction: column;
  width: 347px;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
    gap: 24px;

  border-radius: 14px;
  background: #FFF;
  .dashboard-portfolios-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid #0D163A1a;
    .dashboard-portfolios__title {
      color: #0D163A;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1px;
    }
    .dashboard-portfolios__link {
      color: #4745A4;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }
  .dashboard-portfolios__list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    .dashboard-portfolios__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px;
      border-radius: 14px;
      background: #F5F5F5;
      .dashboard-portfolios__item-title {
        color: #0D163A;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
      .dashboard-portfolios__item-value {
        color: #0D163A;
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