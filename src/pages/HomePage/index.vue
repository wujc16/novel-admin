<template>
  <el-main class="home-main">
    <div class="canvas-container">
      <canvas id="outputCanvas"></canvas>
    </div>
    <div class="slider-container">
      <el-slider
        @change="onSliderChange"
        v-model="sliderCount"
        :min="0" :max="255"
        :debounce="0"
      ></el-slider>
    </div>
    <div class="button-container">
      <img id="main-image" alt="" :src="imgSrc" />
      <input type="file" id="imageInput" @change="onFileChange"/>
      <el-button
        type="primary"
        @click="capturePicture"
        :disabled="!cvEnabled"
      >点击获取图像</el-button>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      cv: {},
      imgSrc: '',
      sliderCount: 0
    }
  },
  computed: {
    cvEnabled () {
      return this.$root['openCvLoaded'];
    }
  },
  methods: {
    capturePicture () {
      if (!this.imgSrc) {
        this.$message.warning('请先选择图片');
      }
      const img = this.cv.imread(document.querySelector('#main-image'));
      const img2 = img.clone();
      this.cv.threshold(img, img2, 50, 255, this.cv['THRESH_BINARY']);
      this.cv.imshow('outputCanvas', img2);
    },
    onFileChange (event) {
      this.imgSrc = URL.createObjectURL(event.target.files[0]);
    },
    loadCv () {
      if (window.cv) {
        window.cv.then(res => {
          this.cv = res;
        });
      }
    },
    onSliderChange (val) {
      const img = this.cv.imread(document.querySelector('#main-image'));
      const img2 = img.clone();
      this.cv.threshold(img, img2, val, 255, this.cv['THRESH_BINARY']);
      this.cv.imshow('outputCanvas', img2);
    }
  },
  watch: {
    cvEnabled: {
      handler (newVal) {
        if (newVal) {
          this.loadCv()
        }
      }
    }
  },
  mounted () {
    this.loadCv();
  }
}
</script>

<style lang="less">
.main-container{
  .home-main{
    height: 100%;
    .slider-container{
      display: flex;
      justify-content: center;
      .el-slider{
        width: 800px;
      }
    }
    #outputCanvas{
      height: 480px;
      width: 720px;
    }
    .button-container{
      img{
        display: none;
      }
    }
  }
}
</style>
