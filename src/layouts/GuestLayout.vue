<script setup>
</script>

<template>
    <div class="guest-layout">
        <div>
            <slot />
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
}
</style>
