<script setup lang="ts">
import GuestInput from '@/components/base/GuestInput.vue';
import LoadingSpinner from '@/components/base/LoadingSpinner.vue';
import authService from '@/api/modules/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';

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

      <div class="buttons-container">
        <button
          class="login-button"
          :class="{ loading: isRequesting }"
          :disabled="isRequesting || !form.email || !form.password"
          @click="submit"
          @keydown.enter="submit"
        >
          <LoadingSpinner v-if="isRequesting" />
          <span v-else>Login</span>
        </button>
  
        <div class="alternative">
          or
        </div>

        <RouterLink
          class="register-button"
          to="/register"
        >
          Register
        </RouterLink>
      </div>
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
  .buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .login-button {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      color: var(--color-text-light);
      background: var(--color-background-primary-light);
      border: none;
      cursor: pointer;

      span {
        text-align: center;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        line-height: 18px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      &:disabled {
        background: var(--color-background-disabled);
        color: var(--color-text-disabled);
        cursor: not-allowed;
      }

      &.loading {
        background: var(--color-background-primary);
        opacity: 0.8;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        background: var(--color-background-primary);
      }
    }
    .alternative {
      margin: 10px 0;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      grid-column-gap: 20px;
      align-items: center;
      font-size: 14px;
      color: var(--color-text-light);
      &:before {
        content: "";
        height: 2px;
        display: block;
        background-color: var(--color-background);
      }
      &:after {
        content: "";
        height: 2px;
        display: block;
        background-color: var(--color-background);
      }
    }
    .register-button {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      background-color: transparent;
      color: var(--color-text-primary);
      border: 2px solid var(--color-text-primary);
      border-radius: 4px;
      transition: .3s;
      cursor: pointer;

      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      line-height: 18px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-align: center;

      &:hover:not(:disabled) {
        background: var(--color-background-primary-light);
        border-color: var(--color-background-primary-light);
        color: var(--color-text-light);
      }
    }
  }
}
</style>