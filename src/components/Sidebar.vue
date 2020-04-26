<template>
    <div class="sidebar hidden" data-js="sidebar">
        <p>Favorite</p>
        <p>Github</p>
        <p>Credits</p>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },

    methods: {
        toggle() {
            let sidebar = document.querySelector('[data-js="sidebar"]');
            sidebar.classList.toggle('hidden')
            console.log('togggggling....')
        }
    }
}
</script>
<style lang=scss>
.sidebar {
    @apply absolute h-full p-4 z-10;
    width: 250px;
    height: 380px;
    right: -3px;
    top: 37px;
    background: var(--primary-color);
    colot: var(--font-color);
}
</style>

