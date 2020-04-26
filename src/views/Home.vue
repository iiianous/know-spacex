<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.content {
  @apply flex-1;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  created() {
    let value = this.getRandomNumber();
    this.$router.push({ path: `/video/${value}`});
  },

  methods: {
    getRandomNumber() {
      return Math.floor((Math.random() * 10) + 1);
    },
  }
}
</script>
