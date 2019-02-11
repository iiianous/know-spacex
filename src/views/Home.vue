<template>
  <div class="content">
    <TheFold />
  </div>
</template>

<style lang="scss">
.content {
  @apply flex-1;
}
</style>

<script>
// @ is an alias to /src
import TheFold from '@/components/TheFold.vue'

export default {
  name: 'home',
  components: {
    TheFold,
  },

  methods: {

  }
}
</script>
