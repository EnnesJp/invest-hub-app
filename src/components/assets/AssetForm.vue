<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue'
import CurrencyInput from '@/components/base/CurrencyInput.vue'
import SelectInput from '@/components/base/SelectInput.vue';
import savingPlanService from '@/api/modules/savingPlans';
import portfolioService from '@/api/modules/portfolios';
import assetsService from '@/api/modules/assets';
import { useAuthStore } from '@/stores/auth';
import { ref, onBeforeMount } from 'vue'

const authStore = useAuthStore();
const form = ref({
  name: '',
  value: '',
  acquisition_date: '',
  quantity: '',
  liquidity_days: '',
  liquidity_date: '',
  income_tax: '',
  portfolio_id: '',
  saving_plan_id: '',
  user_id: authStore.user?.id
})

const isRequestingSavingPlan = ref(true)
const isRequestingPortfolio = ref(true)
const portfolioOptions = ref([])
const savingPlanOptions = ref([])
const emit = defineEmits(['close', 'updateAssets'])

function saveAsset() {
  assetsService().create(form.value)
    .then((response: any) => {
      emit('updateAssets')
      emit('close')
    })
    .catch((error: any) => {
      console.log(error)
    })
}

onBeforeMount(() => {
  savingPlanService().selectData()
    .then((response: any) => {
      savingPlanOptions.value = response.content.data
    })
    .catch((error: any) => {
      console.log(error)
    })
    .finally(() => {
      isRequestingSavingPlan.value = false
    })

  portfolioService().selectData()
    .then((response: any) => {
      portfolioOptions.value = response.content.data
    })
    .catch((error: any) => {
      console.log(error)
    })
    .finally(() => {
      isRequestingPortfolio.value = false
    })
})
</script>

<template>
  <div class="transaction-form">
    <BaseInput
      v-model="form.name"
      placeholder="Name"
      label="Name"
    />

    <div class="transaction-form__value">
      <span class="transaction-form_value--label">
        Value
      </span>

      <CurrencyInput
        v-model="form.value"
        placeholder="RS 0,00"
        :options="{ currency: 'BRL' }"
      />
    </div>

    <BaseInput
      v-model="form.acquisition_date"
      label="Acquisition Date"
      placeholder="Select Date"
      type="date"
    />

    <BaseInput
      v-model="form.quantity"
      label="Quantity"
      placeholder="Quantity"
      type="text"
    />

    <BaseInput
      v-model="form.liquidity_days"
      label="Liquidity Days"
      placeholder="D+"
      type="number"
    />
    
    <BaseInput
      v-model="form.liquidity_date"
      label="Liquidity Date"
      placeholder="Liquidity Date"
      type="date"
    />

    <div class="transaction-form__value">
      <span class="transaction-form_value--label">
        Income Tax
      </span>

      <CurrencyInput
        v-model="form.income_tax"
        placeholder="RS 0,00"
        :options="{ currency: 'BRL' }"
      />
    </div>

    <SelectInput
      v-model="form.portfolio_id"
      label="Portfolio"
      placeholder="Select an portfolio"
      :options="portfolioOptions"
    />

    <SelectInput
      v-model="form.saving_plan_id"
      label="Saving Plan"
      placeholder="Select an saving plan"
      :options="savingPlanOptions"
    />
    
    <div class="transaction-form-buttons">
      <button
        class="btn btn--secondary"
        @click="$emit('close')"
      >
        Cancel
      </button>
      <button
        class="btn btn--primary"
        @click="saveAsset"
      >
        Save
      </button>
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