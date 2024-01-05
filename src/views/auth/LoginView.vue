<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<template>
    <GuestLayout>
        <div class="login-container">
            <IconLogo class="login-logo" />
            <LoginForm />
        </div>
    </GuestLayout>
</template>


<style scoped lang="scss">
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 484px;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    border-left: 1px solid #FFF;
    .login-logo {
        max-width: 100%;
        margin-top: -150px;
    }
}
</style>