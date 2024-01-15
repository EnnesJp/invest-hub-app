<script setup lang="ts">
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import AssetsTable from '@/components/assets/AssetsTable.vue';
import assetsService from '@/api/modules/assets';
import { ref, onMounted } from 'vue';

const { list } = assetsService()
const assets = ref([])
const isRequesting = ref(true)

onMounted(() => {
  list()
    .then((response: any) => {
      assets.value = response.content.data.filter((transaction: any) => transaction.value != 0)
    })
    .finally(() => {
      isRequesting.value = false
    })
})
</script>

<template>
  <AuthenticatedLayout>
    <AssetsTable
      :assets="assets"
      :isRequesting="isRequesting"
    />
  </AuthenticatedLayout>
</template>