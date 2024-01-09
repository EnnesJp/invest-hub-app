<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import TransactionsTable from '@/components/transactions/TransactionTable.vue';
import transactionService from '@/api/modules/transactions';
import StringHelper from '@/helpers/StringHelper';
import { ref, onMounted } from 'vue';

const { list } = transactionService()
const transactions = ref([])
const isRequesting = ref(true)
const totalTransactions = ref('')
const totalCredit = ref('')
const totalDebit = ref('')

onMounted(() => {
  list()
    .then((response: any) => {
      transactions.value = response.content.data
      totalTransactions.value = StringHelper.formatCurrencyBR(response.content.meta.total ?? 0)
      totalCredit.value = StringHelper.formatCurrencyBR(response.content.meta.total_credit ?? 0)
      totalDebit.value = StringHelper.formatCurrencyBR(response.content.meta.total_debit ?? 0)
    })
    .finally(() => {
      isRequesting.value = false
    })
})
</script>

<template>
  <AuthenticatedLayout>
    <TransactionsTable
      :transactions="transactions"
      :isRequesting="isRequesting"
      :totalTransactions="totalTransactions"
      :totalCredit="totalCredit"
      :totalDebit="totalDebit"
    />
  </AuthenticatedLayout>
</template>
