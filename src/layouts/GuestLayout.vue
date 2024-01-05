<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="guest-layout">
        <div>
            <RouterLink to="/">
                <ApplicationLogo class="guest-layout-logo" color="#FFF"/>
            </RouterLink>
        </div>

        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped lang="scss">
.guest-layout {
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    .guest-layout-logo {
        width: 100px;
        height: 100px;
    }
}
</style>
