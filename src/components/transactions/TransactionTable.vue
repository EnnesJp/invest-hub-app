<script setup lang="ts">
import IconDots from '@/components/icons/IconDots.vue';
import TransactionTotals from '@/components/transactions/TransactionTotals.vue';
import TransactionForm from '@/components/transactions/TransactionForm.vue';
import Modal from '@/components/base/Modal.vue';
import StringHelper from '@/helpers/StringHelper';
import type { Transaction } from '@/types/TransactionsHelper';
import { ref } from 'vue';

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

type DropdownActionsRef = {
  [key: string]: HTMLElement
}

const showModal = ref(false)
const dropdownActionsRef = ref({} as DropdownActionsRef);

function showDropdown(id: string) {
  const dropdown = dropdownActionsRef.value[id]
  dropdown.classList.toggle('show')
}
</script>

<template>
  <div class="transactions-table">
    <div class="transactions-table-header">
      <div class="transactions-table-header-top">
        <h1 class="transactions-table-header-top__title">Transaction</h1>
        <button
          class="transactions-table-header-top__btn"
          @click="showModal = true"
        >
          New Transaction
        </button>
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
            <IconDots
              class="action-button"
              @click="showDropdown(transaction.id)"
            />
            <div
              class="action-button-dropdown"
              :ref="el => dropdownActionsRef[transaction.id] = el"
            >
              <div class="action-button-dropdown__item">
                <span class="action-button-dropdown__item-title">Edit</span>
              </div>
              <div class="action-button-dropdown__item">
                <span class="action-button-dropdown__item-title">Delete</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
  <Modal
    :show="showModal"
    title="New Transaction"
    subtitle="Fill in the information below to create a new transaction"
    width="600px"
    icon="card"
    iconBorder
    @close="showModal = false"
  >
    <template #body>
      <TransactionForm 
        @close="showModal = false"
        @updateTransactions="$emit('updateTransactions')"
      />
    </template>
  </Modal>
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
        cursor: pointer;
        border-radius: 8px;
        background: var(--color-background-button);

        color: var(--color-text-light);

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
      }
    }
  }
  .transactions-table-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--color-border-table);
    background-color: var(--color-background);
    .transactions-table-body__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px 24px;
      border-bottom: 1px solid var(--color-border-table);
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
          color: var(--color-text-table);
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
    background-color: var(--color-background);
    overflow-y: auto;
    max-height: 520px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-background-scrollbar-track);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-background-scrollbar-thumb);
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--color-background-scrollbar-thumb-hover);
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
        color: var(--color-text-table);
        font-size: 11px;
        font-style: normal;
        font-weight: 500;
        line-height: 20.4px; 
        width: 20%;
        position: relative;
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
        .action-button {
          width: 24px;
          border-radius: 8px;
          &:hover {
            cursor: pointer;
            border: 1px solid var(--color-border-table-hover);
          }
        }
        .action-button-dropdown {
          position: absolute;
          top: 20px;
          right: 0;
          display: none;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 8px;
          padding: 8px;
          width: 120px;
          background-color: var(--color-background);
          border-radius: 8px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          z-index: 1;
          &.show {
            display: flex;
          }
          .action-button-dropdown__item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            width: 100%;
            padding: 8px;
            border-radius: 8px;
            &:hover {
              background-color: var(--color-background-button-hover);
              cursor: pointer;
            }
            .action-button-dropdown__item-title {
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px;
              font-family: 'Raleway', sans-serif;
              color: var(--color-text);
            }
          }
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
            color: var(--color-text-credit);
            background-color: var(--color-background-credit);
          }
          &.debit {
            color: var(--color-text-debit);
            background-color: var(--color-background-debit);
          }
        }
      }
    }
  }
}
</style>