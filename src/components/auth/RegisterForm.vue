<script setup lang="ts">
import GuestInput from '@/components/base/GuestInput.vue';
import { ref } from 'vue';

const form = ref({
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
});

function submit() {
    console.log(form.value);
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
        v-model="form.confirm_password"
        placeholder="Confirm Password"
        type="password"
        icon="password"
        @keydown.enter="submit"
      />

      <button
        class="register-button"
        @keydown.enter="submit"
        @click="submit"
      >
          Register
      </button>
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
    .register-button {
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