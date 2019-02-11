<template>
  <div class="content">
    <!-- <h1>Video Page: {{id}}</h1> -->
    <TheFold />
  </div>
</template>

<script>
import TheFold from '@/components/TheFold.vue'

export default {
  props: ['id'],

  components: { TheFold },

  data() {
    return {

    }
  },
}
</script>

