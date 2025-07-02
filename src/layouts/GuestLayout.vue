<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue';
import router from '@/router';
</script>

<template>
    <div class="guest-layout">
        <div>
            <div class="container">
                <IconLogo class="logo" />
                
                <router-view/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.guest-layout {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    min-height: 100vh;
    background-image: url(../assets/images/auth/banner.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 484px;
        min-height: 100vh;
        background: var(--color-background-guess);
        border-left: 1px solid var(--color-border-guess);

        .logo {
            max-width: 80%;
            margin-top: -150px;
        }
    }
}
</style>
