<script setup lang="ts">
import IconLogo from '@/components/icons/IconLogo.vue';
</script>

<template>
    <div class="guest-layout">
        <div>
            <div class="container">
                <IconLogo class="logo" />
                <slot />
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
        background: rgba(0, 0, 0, 0.4);
        border-left: 1px solid #FFF;
        .logo {
            max-width: 100%;
            margin-top: -150px;
        }
    }
}
</style>
