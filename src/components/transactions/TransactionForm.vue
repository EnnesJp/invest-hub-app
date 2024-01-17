<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import CurrencyInput from '@/components/base/CurrencyInput.vue'
import SelectInput from '@/components/base/SelectInput.vue';
import assetsService from '@/api/modules/assets';
import { ref, onMounted } from 'vue'

const { selectData } = assetsService()
const form = ref({
  description: '',
  value: '',
  date: '',
  type: '',
  asset_id: '',
})

const isRequesting = ref(true)
const typeOptions = ref([
  { label: 'Credit', value: 'credit' },
  { label: 'Debit', value: 'debit' },
])
const assetOptions = ref([])

onMounted(() => {
  selectData()
    .then((response: any) => {
      assetOptions.value = response.content.data
    })
    .catch((error: any) => {
      console.log(error)
    })
    .finally(() => {
      isRequesting.value = false
    })
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
      :options="typeOptions"
    />

    <SelectInput
      v-model="form.asset_id"
      label="Asset"
      placeholder="Select an asset"
      :options="assetOptions"
    />

    <div class="transaction-form-buttons">
      <button class="btn btn--secondary">Cancel</button>
      <button class="btn btn--primary">Save</button>
    </div>
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
  .transaction-form-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    width: 100%;
    padding-top: 32px;
    .btn {
      width: 100%;
      display: flex;
      height: 40px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border: none;
      cursor: pointer;
      border-radius: 8px;

      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      font-family: 'Raleway', sans-serif;
      &.btn--secondary {
        background-color: var(--color-background-button-secondary);
        color: var(--color-text);
        border: 1px solid var(--color-background-button);
        font-weight: 500;
        &:hover {
          background-color: var(--color-background-button);
          color: var(--color-text-light);
        }
      }
      &.btn--primary {
        background-color: var(--color-background-button);
        color: var(--color-text-light);
        &:hover {
          background-color: var(--color-background-button-focus);
        }
      }
    }
  }
}
</style>