<script setup lang="ts">
import GuestInput from '@/components/base/GuestInput.vue';
import { ref } from 'vue';

const form = ref({
    email: '',
    password: '',
});
const showPassword = ref(false);

function togglePassword() {
    showPassword.value = !showPassword.value;
};

function submit() {
    console.log(form.value);
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
        @click="submit"
        @keydown.enter="submit"
      >
          Login
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
        background: #CFD8DC;
        border: none;

        color: #2A2A2A;
        text-align: center;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }
}
</style>