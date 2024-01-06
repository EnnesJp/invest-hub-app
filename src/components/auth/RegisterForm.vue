<script setup lang="ts">
import GuestInput from '@/components/base/GuestInput.vue';
import usersService from '@/api/modules/users';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const { createUser } = usersService()
const router = useRouter()
const isRequesting = ref(false)
const form = ref({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
});

function submit() {
  isRequesting.value = true

  createUser(form.value)
    .then(() => {
      router.push({ name: 'dashboard' })
    })
    .finally(() => {
      isRequesting.value = false
    })

};
</script>

<template>
  <div class="register-form">
      <GuestInput
        v-model="form.name"
        placeholder="Name"
        type="text"
        icon="person"
      />

      <GuestInput
        v-model="form.username"
        placeholder="Username"
        type="text"
        icon="person"
      />

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
        
      />

      <GuestInput
        v-model="form.confirmPassword"
        placeholder="Confirm Password"
        type="password"
        icon="password"
        @keydown.enter="submit"
      />

      <div class="buttons-container">
        <button
          class="register-button"
          :class="{ loading: isRequesting }"
          :disabled="
            isRequesting ||
            !form.name ||
            !form.username ||
            !form.email ||
            !form.password ||
            !form.confirmPassword"
          @keydown.enter="submit"
          @click="submit"
        >
          <LoadingSpinner v-if="isRequesting" />
          Register
        </button>

        <div class="alternative">
          or
        </div>

        <RouterLink
          class="login-button"
          to="/"
        >
          Login
        </RouterLink>
      </div>
  </div>
</template>


<style scoped lang="scss">
.register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    gap: 53px;
    margin-top: -150px;
    .register-input-container {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #FFF;
        width: 100%;

        .register-input {
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

        .register-input-icon {
            &.password {
                cursor: pointer;
            }
            &.small {
                width: 24px;
                height: 24px;
            }
        }
    }
    .buttons-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .register-button {
          width: 100%;
          height: 40px;
          border-radius: 4px;
          background: #c4a02f;
          border: none;

          color: #2A2A2A;
          text-align: center;
          font-size: 15px;
          font-style: normal;
          font-weight: 700;
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
      .alternative {
      margin: 10px 0;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      grid-column-gap: 20px;
      align-items: center;
      font-size: 14px;
      color: #fff;
      &:before {
        content: "";
        height: 2px;
        display: block;
        background-color: #fff;
      }
      &:after {
        content: "";
        height: 2px;
        display: block;
        background-color: #fff;
      }
    }
    .login-button {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;

      background-color: transparent;
      color: #b28d2d;
      border: 2px solid #b28d2d;
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
        background: #c4a02f;
        border-color: #c4a02f;
        color: #fff;
      }
    }
    }
}
</style>