<script setup lang="ts">
import GuestInput from '@/components/base/GuestInput.vue';
import LoadingSpinner from '@/components/base/LoadingSpinner.vue';
import authService from '@/api/modules/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
    email: '',
    password: '',
});

const { login } = authService()
const isRequesting = ref(false)
const router = useRouter()

function submit() {
  isRequesting.value = true

  login(form.value)
    .then(() => {
      router.push({ name: 'dashboard' })
    })
    .finally(() => {
      isRequesting.value = false
    })
};
</script>

<template>
  <div class="login-form">
      <GuestInput
        v-model="form.email"
        placeholder="Email"
        type="email"
        icon="email"
      />

      <GuestInput
        v-model="form.password"
        placeholder="Password"
        type="password"
        icon="password"
        @keydown.enter="submit"
      />

      <button
        class="login-button"
        :class="{ loading: isRequesting }"
        :disabled="isRequesting || !form.email || !form.password"
        @click="submit"
        @keydown.enter="submit"
      >
        <LoadingSpinner v-if="isRequesting" />
        <spam v-else>Login</spam>
      </button>
  </div>
</template>


<style scoped lang="scss">
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    gap: 53px;
    margin-top: -150px;
    .login-button {
        width: 100%;
        height: 50px;
        border-radius: 4px;
        background: #c4a02f;
        border: none;

        color: #2A2A2A;
        text-align: center;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        line-height: normal;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;

        &:disabled {
            background: #DEDEDE;
            color: #79808A;
            cursor: not-allowed;
        }

        &.loading {
            background: #b28d2d;
            opacity: 0.8;
            cursor: not-allowed;
        }

        &:hover:not(:disabled) {
            background: #b28d2d;
        }
    }
}
</style>