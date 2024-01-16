<script setup lang="ts">
import IconCard from '@/components/icons/modal/IconCard.vue'
import IconCoin from '@/components/icons/modal/IconCoin.vue'
import IconDelete from '@/components/icons/modal/IconDelete.vue'
import IconSave from '@/components/icons/modal/IconSave.vue'
import IconSuccess from '@/components/icons/modal/IconSuccess.vue'

const props = defineProps({
  icon: String
})
</script>

<template>
  <IconCard v-if="icon == 'card'"/>
  <IconCoin v-else-if="icon == 'coin'"/>
  <IconDelete v-else-if="icon == 'delete'"/>
  <IconSave v-else-if="icon == 'save'"/>
  <IconSuccess v-else/>
</template>