<script setup lang="ts">
import IconDots from '@/components/icons/IconDots.vue';
import TransactionTotals from '@/components/transactions/TransactionTotals.vue';
import StringHelper from '@/helpers/StringHelper';
import { Transaction } from '@/types/Transaction';

interface Props {
  transactions?: Array<Transaction>
  isRequesting?: boolean
  totalTransactions?: string
  totalCredit?: string
  totalDebit?: string
}

const props = withDefaults(defineProps<Props>(), {
  transactions: () => [] as Array<Transaction>,
  isRequesting: true,
  totalTransactions: 'R$ 0,00',
  totalCredit: 'R$ 0,00',
  totalDebit: 'R$ 0,00',
})
</script>

<template>
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
    <TransactionTotals
      :isRequesting="isRequesting"
      :totalTransactions="totalTransactions"
      :totalCredit="totalCredit"
      :totalDebit="totalDebit"
    />
    <div class="transactions-table-body">
      <div class="transactions-table-body__header">
        <div class="transactions-table-body__header-item">
          <span class="transactions-table-body__header-item-title">Date</span>
        </div>
        <div class="transactions-table-body__header-item">
          <span class="transactions-table-body__header-item-title">Description</span>
        </div>
        <div class="transactions-table-body__header-item center">
          <span class="transactions-table-body__header-item-title">Type</span>
        </div>
        <div class="transactions-table-body__header-item end">
          <span class="transactions-table-body__header-item-title">Value</span>
        </div>
        <div class="transactions-table-body__header-item end">
          <span class="transactions-table-body__header-item-title">Action</span>
        </div>
      </div>
      <div class="transactions-table-body__content">
        <div
          class="transactions-table-body__content-item"
          v-for="transaction in transactions"
          :key="transaction.id"
        >
          <span class="transactions-table-body__content-item-title number">
            {{ transaction.date }}
          </span>
          <span class="transactions-table-body__content-item-title">
            {{ transaction.description }}
          </span>
          <span class="transactions-table-body__content-item-title center">
            <div
              class="transactions-table-body__content-item-title-badge"
              :class="transaction.type"
            >
              {{ transaction.type }}
            </div>
          </span>
          <span class="transactions-table-body__content-item-title end number">
              {{ StringHelper.formatCurrencyBR(transaction.value) }}
          </span>
          <span class="transactions-table-body__content-item-title end">
            <IconDots />
          </span>
        </div>
      </div>
    </div>
  </div>
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
  .transactions-table-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #DADADA;
    background-color: #FFF;
    .transactions-table-body__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px 24px;
      border-bottom: 1px solid #DADADA;
      .transactions-table-body__header-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 4px;
        width: 20%;
        &.center {
          align-items: center;
        }
        &.end {
          align-items: flex-end;
        }
        .transactions-table-body__header-item-title {
          color: #828282;
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 20.4px; 
        }
      }
    }
  }
  .transactions-table-body__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    background-color: #FFF;
    overflow-y: scroll;
    max-height: 520px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
    .transactions-table-body__content-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: stretch;
      padding: 16px 19px 16px 24px;
      width: 100%;
      .transactions-table-body__content-item-title {
        display: flex;
        color: #828282;
        font-size: 11px;
        font-style: normal;
        font-weight: 500;
        line-height: 20.4px; 
        width: 20%;
        &.center {
          justify-content: center;
        }
        &.end {
          justify-content: flex-end;
        }
        &.number {
          font-weight: bold;
          font-family: Plus Jakarta Sans;
        }
        .transactions-table-body__content-item-title-badge {
          display: flex;
          padding: 6px 12px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          text-transform: uppercase;

          &.credit {
            color: #31D3A3;
            background-color: #31d3a230;
          }
          &.debit {
            color: #FE3766;
            background-color: #fe376630;
          }
        }
      }
    }
  }
}
</style>