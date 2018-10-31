<template>
  <div class="content">
    <button @click="toSelectRoom">选择会议室</button>
    <button @click="toShowOccupyRoom">显示会议室占用</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    toSelectRoom () {
      this.$router.push({
        path: '/selectRoom'
      })
    },
    toShowOccupyRoom () {
      this.$router.push({
        path: '/occupyRoom'
      })
    }
  }
}
</script>

<style scoped>
  .content{width: 100%;height: 100%}
</style>
