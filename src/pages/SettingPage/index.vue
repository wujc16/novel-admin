<template>
  <el-main class="setting-main">
    {{msg}}
  </el-main>
</template>

<script>
export default {
  name: 'SettingPage',
  data () {
    return {
      msg: 'settings'
    }
  }
}
</script>

<style lang="less">
.main-container{
  .setting-main{
    width: 100%;
  }
}
</style>
