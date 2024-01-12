<script setup lang="ts">
import savingPlanService from '@/api/modules/savingPlans';
import StringHelper from '@/helpers/StringHelper';
import { SavingPlan } from '@/types/DashboardHelper'
import { ref, onMounted } from 'vue'

const { list } = savingPlanService()

const savingPlans = ref<SavingPlan[]>([])
const isRequesting = ref(true)

function getProgress(savingPlan: SavingPlan) {
  return (savingPlan.total_accumulated / savingPlan.target_value) * 100
}

onMounted(() => {
  list()
    .then((response: any) => {
      savingPlans.value = response.content.data
    })
    .finally(() => {
      isRequesting.value = false
    })
})
</script>

<template>
  <div class="saving-plans">
    <div class="saving-plans-header">
      <div class="saving-plans__title">Saving Plans</div>
      <div class="saving-plans__link">See All</div>
    </div>
    <div class="saving-plans__list">
      <div 
        v-for="(savingPlan, index) in savingPlans"
        :key="index"
        class="saving-plans__item"
      >
        <div class="saving-plans-item-header">
          <div class="saving-plans-item-header__title">
            {{ savingPlan.name }}
          </div>
          <div class="saving-plans-item-header__target">
            Target: {{ savingPlan.target_date }}
          </div>
        </div>
        <div class="saving-plans-item-body">
          <div class="saving-plans-item-body__value">
            {{ StringHelper.formatCurrencyBR(savingPlan.total_accumulated) }}
            <span class="saving-plans-item-body__value-target">
              / {{ StringHelper.formatCurrencyBR(savingPlan.target_value) }}
            </span>
          </div>
          <div
            class="saving-plans-item-body__progress"
            :class="{
                first: index == 0,
                second: index == 1,
                third: index == 2
            }"
          >
            {{ getProgress(savingPlan).toFixed(2) }}%
          </div>
        </div>
        <div class="saving-plans-item-progress">
          <div class="saving-plans-item-progress__bar">
            <div 
              class="saving-plans-item-progress__bar-value"
              :class="{
                first: index == 0,
                second: index == 1,
                third: index == 2
              }"
              :style="{ width: `${getProgress(savingPlan)}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.saving-plans {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 550px;
  padding: 16px;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 24px;

  border-radius: 14px;
  background: var(--color-background);
  .saving-plans-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--color-border-menu-transparent);
    .saving-plans__title {
      color: var(--color-text);
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -1px;
    }
    .saving-plans__link {
      color: var(--color-text-link);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }
  .saving-plans__list {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 24px;
    .saving-plans__item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px;
      border-radius: 14px;
      gap: 14px;
      .saving-plans-item-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .saving-plans-item-header__title {
          color: var(--color-text);
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }
        
        .saving-plans-item-header__target {
          color: var(--color-text);
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          opacity: 0.6;
          font-family: Plus Jakarta Sans;
        }
      }
      .saving-plans-item-body {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        .saving-plans-item-body__value {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          gap: 4px;
          color: var(--color-text);
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -1px;
          font-family: Plus Jakarta Sans;
          .saving-plans-item-body__value-target {
            font-size: 12px;
            opacity: 0.6;
          }
        }
        .saving-plans-item-body__progress {
          font-family: Plus Jakarta Sans;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -1px;

          &.first {
            color: var(--color-text-progress-first);
          }
          &.second {
            color: var(--color-text-progress-second);
          }
          &.third {
            color: var(--color-text-progress-third);
          }
        }
      }
      .saving-plans-item-progress {
        display: flex;
        width: 100%;
        height: 8px;
        border-radius: 4px;
        background: var(--color-background-disabled);
        .saving-plans-item-progress__bar {
          display: flex;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          overflow: hidden;
          .saving-plans-item-progress__bar-value {
            display: flex;
            height: 100%;
            border-radius: 4px;
            &.first {
              background: var(--color-background-progress-bar-first);
            }
            &.second {
              background: var(--color-background-progress-bar-second);
            }
            &.third {
              background: var(--color-background-progress-bar-third);
            }
          }
        }
      }
    }
  }
}
</style>