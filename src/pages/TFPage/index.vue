<template>
  <el-main class="tf-main">
    <h3>
      词汇恶意性检测：
    </h3>
    <div class="input-container">
      <el-input
        v-model="word"
        placeholder="请输入待检测语句"
      />
      <el-button
        @click="onDetect"
        type="primary"
        :loading="buttonLoading"
        :disabled="!loadedModel"
      >点击检测</el-button>
    </div>
    <div class="detect-score">
      恶意性评分：{{score}}
    </div>
  </el-main>
</template>

<script>
import * as toxicity from '@tensorflow-models/toxicity';

const threshold = 0.9;

export default {
  name: 'index',
  data () {
    return {
      buttonLoading: false,
      word: '',
      loadedModel: null,
      score: 0
    }
  },
  methods: {
    onDetect () {
      this._validateText(this.word)
    },
    async _loadModel () {
      try {
        this.loadedModel = await toxicity.load(threshold, ['toxicity'])
      } catch (err) {
        this.$message.error('模型加载失败！')
      }
    },
    async _validateText (word) {
      if (!this.loadedModel) {
        this.$message.error('模型尚未加载完成！')
        return;
      }
      this.buttonLoading = true
      try {
        const predictions = await this.loadedModel.classify([word])
        this.score = predictions[0].results[0].probabilities
      } catch (e) {
        console.error(e);
      }
      this.buttonLoading = false
    }
  },
  mounted () {
    // this._loadModel();
  }
}
</script>

<style lang="less">
.tf-main{
  width: 100%;
  h3{
    text-align: left;
    color: #333333;
  }
  .detect-score{
    text-align: left;
    margin-top: 24px;
    width: 300px;
    height: 40px;
    border-radius: 4px;
    line-height: 40px;
    padding: 0 10px;
    background-color: #efefef;
  }
  .input-container{
    display: flex;
    .el-input{
      width: 320px;
      margin-right: 16px;
    }
  }
}
</style>
