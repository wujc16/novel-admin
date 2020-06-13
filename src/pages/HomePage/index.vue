<template>
  <el-main class="home-main">
    <el-container>
      <el-main>
        {{msg}}
      </el-main>
    </el-container>
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
    padding: 0;
    height: 100%;
    .el-container{
      height: 100%;
    }
  }
}
</style>
