<template>
  <el-container class="home-container">
    <el-header class="home-header">
      <img src="../../assets/logo.png" alt="" class="logo-img"/>
      <div class="title">Novel Admin</div>
    </el-header>
    <el-main class="home-main">
      <el-container>
        <el-aside class="home-aside">
        </el-aside>
        <el-main>
        </el-main>
      </el-container>
    </el-main>
    <el-footer class="home-footer">
      Footer
    </el-footer>
  </el-container>
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
.home-container{
  height: 100%;
  .home-header{
    display: flex;
    background-color: #2c3e50;
    text-align: left;
    .logo-img{
      height: 40px;
      width: 40px;
      margin-top: 10px;
    }
    .title{
      display: inline-block;
      height: 60px;
      line-height: 60px;
      font-size: 24px;
      margin-left: 16px;
      color: #ffffff;
    }
  }
  .home-aside{
    background-color: aliceblue;
  }
  .home-main{
    padding: 0;
    height: 100%;
    .el-container{
      height: 100%;
      .home-aside{
        width: 240px!important;
        height: 100%;
      }
    }
  }
}
</style>
