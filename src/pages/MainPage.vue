<template>
  <el-container class="main-container">
    <el-header class="main-header">
      <div class="left-group">
        <img src="../assets/logo.png" alt="" class="logo-img" @click="goHome"/>
        <div class="title" @click="goHome">Novel Admin</div>
      </div>
      <div class="right-group">
        <el-icon class="el-icon-setting" @click.native="goSettings"/>
      </div>
    </el-header>
    <router-view />
  </el-container>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'hello home!'
    }
  },
  methods: {
    _safePush (location) {
      if (location === this.$route.fullPath) {
        return;
      }
      this.$router.push(location);
    },
    goSettings () {
      this._safePush('/settings');
    },
    goHome () {
      this._safePush('/home');
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.fullPath === from.fullPath) {
      next(false);
    }
    next()
  }
}
</script>

<style lang="less">
  .main-container{
    height: 100%;
    .main-header{
      background-color: #2c3e50;
      display: flex;
      justify-content: space-between;
      .left-group{
        display: flex;
        text-align: left;
        .logo-img{
          cursor: pointer;
          height: 40px;
          width: 40px;
          margin-top: 10px;
        }
        .title{
          cursor: pointer;
          display: inline-block;
          height: 60px;
          line-height: 60px;
          font-size: 24px;
          margin-left: 16px;
          color: #ffffff;
        }
      }
      .right-group{
        display: flex;
        text-align: right;
        align-content: center;
        .el-icon-setting{
          font-size: 32px;
          margin: 0 12px;
          font-weight: 500;
          line-height: 60px;
          color: #ffffff;
          cursor: pointer;
          &:hover{
            color: #dfdfdf;
          }
        }
      }
    }
  }
</style>
