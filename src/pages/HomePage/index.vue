<template>
  <el-main class="home-main">
    {{msg}}
  </el-main>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'hello home!'
    }
  }
}
</script>

<style lang="less">
.main-container{
  .home-main{
    height: 100%;
  }
}
</style>
