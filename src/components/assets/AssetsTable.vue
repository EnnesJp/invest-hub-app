<script setup lang="ts">
import IconDots from '@/components/icons/IconDots.vue';
import StringHelper from '@/helpers/StringHelper';
import type { Asset } from '@/types/AssetsHelper';

interface Props {
  assets?: Array<Asset>
  isRequesting?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  assets: () => [] as Array<Asset>,
  isRequesting: true,
})
</script>

<template>
  <div class="assets-table">
    <div class="assets-table-header">
      <div class="assets-table-header-top">
        <h1 class="assets-table-header-top__title">Assets</h1>
        <button class="assets-table-header-top__btn">New Asset</button>
      </div>
      <div class="assets-table-header-bottom">
        <span class="assets-table-header-bottom__title">summary</span>
        <div class="assets-table-header-bottom__filter"></div>
      </div>
    </div>
    <div class="assets-table-body">
      <div class="assets-table-body__header">
        <div class="assets-table-body__header-item">
          <span class="assets-table-body__header-item-title">Name</span>
        </div>
        <div class="assets-table-body__header-item end">
          <span class="assets-table-body__header-item-title">Value</span>
        </div>
        <div class="assets-table-body__header-item center">
          <span class="assets-table-body__header-item-title">Acquisition Date</span>
        </div>
        <div class="assets-table-body__header-item center">
          <span class="assets-table-body__header-item-title">Quantity</span>
        </div>
        <div class="assets-table-body__header-item center">
          <span class="assets-table-body__header-item-title">Liquidity Days</span>
        </div>
        <div class="assets-table-body__header-item center">
          <span class="assets-table-body__header-item-title">Liquidity Date</span>
        </div>
        <div class="assets-table-body__header-item end">
          <span class="assets-table-body__header-item-title">Income Tax</span>
        </div>
        <div class="assets-table-body__header-item end">
          <span class="assets-table-body__header-item-title">Action</span>
        </div>
      </div>
      <div class="assets-table-body__content">
        <div
          class="assets-table-body__content-item"
          v-for="asset in assets"
          :key="asset.id"
        >
          <span class="assets-table-body__content-item-title">
            {{ asset.name }}
          </span>
          <span class="assets-table-body__content-item-title end number">
            {{ StringHelper.formatCurrencyBR(asset.value) }}
          </span>
          <span class="assets-table-body__content-item-title center">
            {{ asset.acquisition_date }}
          </span>
          <span class="assets-table-body__content-item-title center number">
            {{ asset.quantity ?? '-' }}
          </span>
          <span class="assets-table-body__content-item-title center number">
            {{ StringHelper.liquidityLabel(asset.liquidity_days) }}
          </span>
          <span class="assets-table-body__content-item-title center number">
            {{ asset.liquidity_date ?? '-' }}
          </span>
          <span class="assets-table-body__content-item-title end number">
            {{ StringHelper.formatCurrencyBR(asset.income_tax) }}
          </span>
          <span class="assets-table-body__content-item-title end">
            <IconDots />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.assets-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  border-radius: 14px;
  padding: 24px;

  .assets-table-header {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    margin-bottom: 16px;
    width: 100%;

    .assets-table-header-top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      margin-bottom: 40px;
      .assets-table-header-top__title {
        font-size: 20px;
        font-weight: 600;
        color: var(--color-text);
      }
      .assets-table-header-top__btn {
        display: flex;
        height: 40px;
        padding: 8px 16px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border: none;

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

    .assets-table-header-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .assets-table-header-bottom__title {
        font-size: 10px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0.1px;
        text-transform: uppercase;
        color: var(--color-text);
      }
      .assets-table-header-bottom__filter {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }
    }
  }
  .assets-table-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--color-border-table);
    background-color: var(--color-background);
    .assets-table-body__header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px 24px;
      border-bottom: 1px solid var(--color-border-table);
      .assets-table-body__header-item {
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
        .assets-table-body__header-item-title {
          color: var(--color-text-table);
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 20.4px; 
        }
      }
    }
  }
  .assets-table-body__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 8px;
    background-color: var(--color-background);
    overflow-y: scroll;
    max-height: 590px;

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
    .assets-table-body__content-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: stretch;
      padding: 16px 19px 16px 24px;
      width: 100%;
      .assets-table-body__content-item-title {
        display: flex;
        color: var(--color-text-table);
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
      }
    }
  }
}
</style>