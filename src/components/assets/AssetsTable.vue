<script setup lang="ts">
import Modal from '@/components/base/Modal.vue';
import AssetForm from '@/components/assets/AssetForm.vue';
import StringHelper from '@/helpers/StringHelper';
import ActionTableButton from '@/components/base/ActionTableButton.vue';
import DeleteConfirmation from '@/components/base/DeleteConfirmation.vue';
import assetsService from '@/api/modules/assets';
import type { Asset } from '@/types/AssetsHelper';
import { ref } from 'vue';

interface Props {
  assets?: Array<Asset>
  isRequesting?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  assets: () => [] as Array<Asset>,
  isRequesting: true,
})

const showModal = ref(false)
const showDeleteModal = ref(false)
const { deleteAsset } = assetsService()
const isEditing = ref(false)
const emit = defineEmits(['updateAssets'])
const assetData = ref({} as Asset)

function close() {
  showModal.value = false
  showDeleteModal.value = false
  isEditing.value = false
}

function editAsset(asset: Asset) {
  showModal.value = true
  isEditing.value = true
  assetData.value = asset
}

function deleteBtnAction(asset: Asset) {
  showDeleteModal.value = true
  assetData.value = asset
}

function deleteAssetById() {
  deleteAsset(assetData.value.id)
    .then((response: any) => {
      emit('updateAssets')
      showDeleteModal.value = false
    })
    .catch((error: any) => {
      console.log(error)
    })
}
</script>

<template>
  <div class="assets-table">
    <div class="assets-table-header">
      <div class="assets-table-header-top">
        <h1 class="assets-table-header-top__title">Wallet</h1>
        <button
          class="assets-table-header-top__btn"
          @click="showModal = true"
        >
          New Asset
        </button>
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
            <ActionTableButton
              :objectData="asset"
              @edit="editAsset"
              @delete="deleteBtnAction"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
  <Modal
    :show="showModal"
    title="New Asset"
    subtitle="Fill in the information below to create a new asset"
    width="600px"
    icon="coin"
    iconBorder
    @close="close"
  >
    <template #body>
      <AssetForm
        :asset="assetData"
        :isEditing="isEditing"
        @close="showModal = false"
        @updateAssets="$emit('updateAssets')"
      />
    </template>
  </Modal>
  <Modal
    :show="showDeleteModal"
    title="Delete Transaction"
    width="700px"
    icon="delete"
    @close="close"
  >
    <template #body>
      <DeleteConfirmation
        :id="assetData.id"
        :message="`Are you sure you want to delete the asset '${assetData.name}'? This action cannot be undone.`"
        @close="showDeleteModal = false"
        @delete="deleteAssetById"
      />
    </template>
  </Modal>
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
    overflow-y: auto;
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
      }
    }
  }
}
</style>