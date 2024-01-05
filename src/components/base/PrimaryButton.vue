<template>
    <button
        class="primary-button"
    >
        <slot />
    </button>
</template>

<style scoped lang="scss">
.primary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem, 0.5rem;
    background-color: rgb(31 41 55 / 1);
    border-color: transparent;
    border-radius: 0.375rem;

    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(255 255 255 / 1);
    text-transform: uppercase;
    letter-spacing: 0.1em;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
        background-color: rgb(55 65 81 / 1);
    }
    &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
        box-shadow: 0 0 0 4px rgb(99 102 241 / 1);
        background-color: rgb(55 65 81 / 1);
    }
    &:active {
        background-color: rgb(17 24 39 / 1);
    }
}
</style>
