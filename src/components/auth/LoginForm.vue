<script setup lang="ts">
import IconPerson from '@/components/icons/IconPerson.vue';
import IconShow from '@/components/icons/IconShow.vue';
import IconHide from '@/components/icons/IconHide.vue';
import { ref } from 'vue';

const form = ref({
    email: '',
    password: '',
});
const showPassword = ref(false);

function togglePassword() {
    showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="login-form">
      <div class="login-input-container">
          <input
              type="text"
              class="login-input"
              placeholder="Email"
              :value="form.email"
          >

          <IconPerson class="login-input-icon"/>
      </div>

      <div class="login-input-container">
          <input
              :type="showPassword ? 'text' : 'password'"
              class="login-input"
              placeholder="Password"
              :value="form.password"
          >

          <IconShow
              v-if="showPassword"
              class="login-input-icon password"
              @click="togglePassword"
          />
          <IconHide
              v-else
              class="login-input-icon password"
              @click="togglePassword"
          />
      </div>

      <button class="login-button">
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
    .login-input-container {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #FFF;
        width: 100%;

        .login-input {
            width: 100%;
            height: 48px;
            background-color: transparent;
            border: none;
            
            color: #FFF;
            font-size: 17.926px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            &::placeholder {
                color: #FFF;
            }

            &:focus {
                outline: none;
            }
        }

        .login-input-icon {
            &.password {
                cursor: pointer;
                width: 24px;
                height: 24px;
            }
        }
    } 
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