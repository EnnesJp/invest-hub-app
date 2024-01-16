<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import CurrencyInput from '@/components/base/CurrencyInput.vue'
import SelectInput from '@/components/base/SelectInput.vue';
import { ref } from 'vue'

const form = ref({
  description: '',
  value: '',
  date: '',
  type: '',
})

</script>

<template>
  <div class="transaction-form">
    <BaseInput
      v-model="form.description"
      placeholder="Description"
      label="Description"
    />
    <div class="transaction-form__value">
      <span class="transaction-form_value--label">
        Value
      </span>
      <CurrencyInput
        v-model="form.value"
        placeholder="Value"
        :options="{ currency: 'BRL' }"
      />
    </div>
    <BaseInput
      v-model="form.date"
      label="Date"
      placeholder="Date"
      type="date"
    />
    <SelectInput
      v-model="form.type"
      label="Type"
      placeholder="Select a type"
      :options="[
        { label: 'Credit', value: 'credit' },
        { label: 'Debit', value: 'debit' },
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
.transaction-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  .transaction-form__value {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    .transaction-form_value--label {
      color: var(--color-text);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      width: 20%;
    }
  }
}
</style>