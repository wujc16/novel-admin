import Vue from 'vue';
import App from './App';
import router from 'router';
import ElementUi from 'element-ui';
// 引入 element ui 样式库
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUi);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  data: {
    openCvLoaded: false
  },
  methods: {
    loadOpenCv () {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = '/static/opencv.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        this.openCvLoaded = true
      }
    }
  },
  mounted () {
    this.loadOpenCv();
  },
  template: '<App/>'
});
