<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <AuthenticatedLayout>
    <div class="dashboard-view">
      <div class="dashboard-view__top">
        <div class="dashboard-view__top__left">
          <h1 class="dashboard-view__top__left__title">Dashboard</h1>
          <p class="dashboard-view__top__left__subtitle">Welcome back, {{ authStore.user?.name }}</p>
        </div>
        <div class="dashboard-view__top__right">
          <div class="dashboard-view__top__right__card">
            <div class="dashboard-view__top__right__card__top">
              <p class="dashboard-view__top__right__card__top__title">Total Balance</p>
              <p class="dashboard-view__top__right__card__top__subtitle">Total balance in your wallet</p>
            </div>
            <div class="dashboard-view__top__right__card__bottom">
              <p class="dashboard-view__top__right__card__bottom__amount">$ 0.00</p>
            </div>
          </div>
          <div class="dashboard-view__top__right__card">
            <div class="dashboard-view__top__right__card__top">
              <p class="dashboard-view__top__right__card__top__title">Total Balance</p>
              <p class="dashboard-view__top__right__card__top__subtitle">Total balance in your wallet</p>
            </div>
            <div class="dashboard-view__top__right__card__bottom">
              <p class="dashboard-view__top__right__card__bottom__amount">$ 0.00</p>
            </div>
          </div>
          <div class="dashboard-view__top__right__card">
            <div class="dashboard-view__top__right__card__top">
              <p class="dashboard-view__top__right__card__top__title">Total Balance</p>
              <p class="dashboard-view__top__right__card__top__subtitle">Total balance in your wallet</p>
            </div>
            <div class="dashboard-view__top__right__card__bottom">
              <p class="dashboard-view__top__right__card__bottom__amount">$ 0.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="scss">
.dashboard-view {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    &__left {
      display: flex;
      flex-direction: column;
      &__title {
        font-size: 24px;
        font-weight: 600;
        color: #0D163A;
        margin-bottom: 8px;
      }
      &__subtitle {
        font-size: 14px;
        font-weight: 400;
        color: #0D163A;
      }
    }
    &__right {
      display: flex;
      align-items: center;
      &__card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        background: #FFFFFF;
        border-radius: 8px;
        margin-left: 16px;
        &__top {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 16px;
          &__title {
            font-size: 14px;
            font-weight: 600;
            color: #0D163A;
            margin-bottom: 8px;
          }
          &__subtitle {
            font-size: 12px;
            font-weight: 400;
            color: #0D163A;
          }
        }
        &__bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          &__amount {
            font-size: 24px;
            font-weight: 600;
            color: #0D163A;
          }
        }
      }
    }
  }
}
</style>