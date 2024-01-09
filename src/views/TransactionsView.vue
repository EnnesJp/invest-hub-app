<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import IconSmallWallet from '@/components/icons/IconSmallWallet.vue';
import IconDirect from '@/components/icons/IconDirect.vue';
</script>

<template>
  <AuthenticatedLayout>
    <div class="transactions-table">
      <div class="transactions-table-header">
        <div class="transactions-table-header-top">
          <h1 class="transactions-table-header-top__title">Transaction</h1>
          <button class="transactions-table-header-top__btn">New Transaction</button>
        </div>
        <div class="transactions-table-header-bottom">
          <span class="transactions-table-header-bottom__title">summary</span>
          <div class="transactions-table-header-bottom__filter"></div>
        </div>
      </div>
      <div class="transactions-table-totais">
        <div class="transactions-table-totais__item">
          <div class="transactions-table-totais__item-icon">
            <IconSmallWallet />
          </div>
          <div class="transactions-table-totais__item-info">
            <span class="transactions-table-totais__item-title">Total</span>
            <span class="transactions-table-totais__item-value">4,500</span>
          </div>
        </div>
        <div class="transactions-table-totais__item">
          <div class="transactions-table-totais__item-icon">
            <IconDirect color="#31D3A3"/>
          </div>
          <div class="transactions-table-totais__item-info">
            <span class="transactions-table-totais__item-title">Credit</span>
            <span class="transactions-table-totais__item-value">4,500</span>
          </div>
        </div>
        <div class="transactions-table-totais__item">
          <div class="transactions-table-totais__item-icon">
            <IconDirect down color="#FE3766"/>
          </div>
          <div class="transactions-table-totais__item-info">
            <span class="transactions-table-totais__item-title">Debit</span>
            <span class="transactions-table-totais__item-value">0</span>
          </div>
        </div>
      </div>
      <div class="transactions-table-body">

      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped lang="scss">
.transactions-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  border-radius: 14px;
  padding: 24px;

  .transactions-table-header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    margin-bottom: 16px;
    width: 100%;

    .transactions-table-header-top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      margin-bottom: 40px;
      .transactions-table-header-top__title {
        font-size: 20px;
        font-weight: 600;
        color: var(--color-text);
      }
      .transactions-table-header-top__btn {
        display: flex;
        height: 40px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: none;

        border-radius: 8px;
        background: #606CCB;

        color: #FFF;

        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        font-family: 'Raleway', sans-serif;
      }
    }

    .transactions-table-header-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .transactions-table-header-bottom__title {
        font-size: 10px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-transform: uppercase;
        color: var(--color-text);
      }
      .transactions-table-header-bottom__filter {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: var(--color-primary);
      }
    }
  }
  .transactions-table-totais {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    gap: 24px;
    .transactions-table-totais__item {
      display: flex;
      padding: 20px 16px;
      align-items: center;
      gap: 16px;
      flex: 1 0 0;

      border-radius: 10px;
      border: 1px solid #DADADA;

      background: #FFF;
      .transactions-table-totais__item-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        flex-shrink: 0;
        border-radius: 8px;
        background: #F4F4F4;

        svg {
          width: 20px;
          height: 20px;
        }
      }
      .transactions-table-totais__item-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 4px;
        .transactions-table-totais__item-title {
          display: flex;
          width: 83px;
          height: 10px;
          flex-direction: column;
          justify-content: center;
          flex-shrink: 0;

          color: #828282;
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 20.4px; 
        }
        .transactions-table-totais__item-value {
          color: #000;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          font-family: Plus Jakarta Sans;
        }
      }
    }
  }
  .transactions-table-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #F2F2F2;
  }
}
</style>