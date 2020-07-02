<template>
  <el-main class="wasm-main">
    <h3>
      WebAssembly & Js 性能对比测试，递归计算 Fibonacci 数列：
    </h3>
    <div class="input-container">
      <el-input-number
        v-model="inputNum"
        :max="43"
        :min="20"
      />
      <el-button
        @click="calcFib"
        type="primary"
        :disabled="wasmFibonacci === null"
      >点击计算</el-button>
    </div>
    <div class="detect-score">
      <div>
        WebAssembly 花费时间：{{wasmCost}}
      </div>
      <div>
        JavaScript 花费时间：{{jsCost}}
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'WasmPage',
  data () {
    return {
      inputNum: 20,
      wasmFibonacci: null,
      jsCost: 0,
      wasmCost: 0,
      cv: {}
    }
  },
  methods: {
    calcFib () {
      console.log('start');
      if (this.inputNum < 20 || this.inputNum > 43) {
        return;
      }
      const startTime = Date.now();
      this.fibonacci(this.inputNum);
      const jsEndTime = Date.now();
      this.wasmFibonacci(this.inputNum);
      const wasmEndTime = Date.now();
      this.jsCost = jsEndTime - startTime;
      this.wasmCost = wasmEndTime - jsEndTime;
    },
    fibonacci (n) {
      if (n <= 0) {
        return 0;
      }
      if (n === 1) {
        return 1;
      }
      return this.fibonacci(n - 2) + this.fibonacci(n - 1);
    },
    async loadFunction (path) {
      const res = await fetch(path);
      const buffer = await res.arrayBuffer();
      const obj = await WebAssembly.instantiate(buffer);
      this.wasmFibonacci = obj.instance.exports['Fibonacci'];
    },
    async checkReady () {
      if (window.cv && window.cv.then) {
        this.cv = await window.cv.then();
        console.log('cv: ', this.cv.sqrt(12, 2));
      }
    }
  },
  mounted () {
    this.checkReady();
    this.loadFunction('../../../static/fib.wasm');
  }
}
</script>

<style lang="less">
.wasm-main{
  width: 100%;
  h3{
    text-align: left;
    color: #333333;
  }
  .detect-score{
    text-align: left;
    margin-top: 24px;
    width: 300px;
    border-radius: 4px;
    line-height: 40px;
    padding: 0 10px;
    background-color: #efefef;
  }
  .input-container{
    display: flex;
    margin-top: 12px;
    .el-input-number{
      margin-right: 16px;
    }
  }
}
</style>
