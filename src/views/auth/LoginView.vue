<script setup>
import GuestLayout from '@/layouts/GuestLayout.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import IconPerson from '@/components/icons/IconPerson.vue';
import IconEye from '@/components/icons/IconEye.vue';

</script>

<template>
    <GuestLayout>
        <div class="login-container">
            <IconLogo class="login-logo" color="#CFD8DC"/>
            <div class="login-form">
                <div class="login-input-container">
                    <input type="text" class="login-input" placeholder="Email">

                    <IconPerson class="login-input-icon"/>
                </div>

                <div class="login-input-container">
                    <input type="password" class="login-input" placeholder="Password">

                    <IconEye class="login-input-icon"/>
                </div>

                <button class="login-button">
                    Login
                </button>
            </div>
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
}
</style>