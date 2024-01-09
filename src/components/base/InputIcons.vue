<script setup lang="ts">
import IconShow from '@/components/icons/IconShow.vue';
import IconHide from '@/components/icons/IconHide.vue';
import IconMail from '@/components/icons/IconMail.vue';
import IconPerson from '@/components/icons/IconPerson.vue';

interface Props {
  icon: string,
  showPassword: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  showPassword: false,
})

defineEmits(['update:modelValue'])
</script>

<template>
  <IconShow
      v-if="showPassword && icon === 'password'"
      class="login-input-icon password small"
  />
  <IconHide
      v-else-if="!showPassword && icon === 'password'"
      class="login-input-icon password small"
  />
  <IconMail
      v-else-if="icon === 'email'"
      class="login-input-icon small"
  />
  <IconPerson
    v-else-if="icon === 'person'"
    class="login-input-icon small"
  />
</template>

<style scoped lang="scss">
.login-input-icon {
  &.password {
    cursor: pointer;
  }
  &.small {
    width: 24px;
    height: 24px;
  }
}
</style>