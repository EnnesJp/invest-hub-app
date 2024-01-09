<script setup lang="ts">
import IconSmallWallet from '@/components/icons/IconSmallWallet.vue';
import IconDirect from '@/components/icons/IconDirect.vue';
import AnimatedPlaceholder from '@/components/base/AnimatedPlaceholder.vue';

interface Props {
  isRequesting?: boolean
  totalTransactions?: string
  totalCredit?: string
  totalDebit?: string
}

const props = withDefaults(defineProps<Props>(), {
  isRequesting: true,
})
</script>

<template>
  <div class="transactions-table-totais">
    <div class="transactions-table-totais__item">
      <div class="transactions-table-totais__item-icon">
        <IconSmallWallet />
      </div>
      <div class="transactions-table-totais__item-info">
        <span class="transactions-table-totais__item-title">Total</span>
        <div class="transactions-table-totais__item-value" v-if="isRequesting">
          <AnimatedPlaceholder
            width="100%"
            height="100%"
            borderRadius="8px"
          />
        </div>
        <span class="transactions-table-totais__item-value" v-else>
          {{ totalTransactions }}
        </span>
      </div>
    </div>
    <div class="transactions-table-totais__item">
      <div class="transactions-table-totais__item-icon">
        <IconDirect color="#31D3A3"/>
      </div>
      <div class="transactions-table-totais__item-info">
        <span class="transactions-table-totais__item-title">Credit</span>
        <div class="transactions-table-totais__item-value" v-if="isRequesting">
          <AnimatedPlaceholder
            width="100%"
            height="100%"
            borderRadius="8px"
          />
        </div>
        <span class="transactions-table-totais__item-value" v-else>
          {{ totalCredit }}
        </span>
      </div>
    </div>
    <div class="transactions-table-totais__item">
      <div class="transactions-table-totais__item-icon">
        <IconDirect down color="#FE3766"/>
      </div>
      <div class="transactions-table-totais__item-info">
        <span class="transactions-table-totais__item-title">Debit</span>
        <div class="transactions-table-totais__item-value" v-if="isRequesting">
          <AnimatedPlaceholder
            width="100%"
            height="100%"
            borderRadius="8px"
          />
        </div>
        <span class="transactions-table-totais__item-value" v-else>
          {{ totalDebit }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
        width: 100%;
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
</style>