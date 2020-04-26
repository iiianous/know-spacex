<template>
    <div class="flex-1 p-4">
        <h3 class="uppercase">{{details.mission_name}}</h3>
        <p class="text-md">{{ infoDetails }}</p>
    </div>
</template>

<script>
export default {
    name: 'Details',
    props: ['details'],
    data() {
        return {

        }
    },

    computed: {
        infoDetails() {
            return this.details
                ? this.details.details
                : 'No details provided on this flight.'
        }
    }
}
</script>

