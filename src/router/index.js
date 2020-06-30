import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由懒加载
const MainPage = () => import(/* webpackChunkName: "MainPage" */ 'pages/MainPage')
const HomePage = () => import(/* webpackChunkName: "HomePage" */ 'pages/HomePage')
const SettingPage = () => import(/* webpackChunkName: "SettingsPage" */ 'pages/SettingPage')
const TFPage = () => import(/* webpackChunkName: "TFPage" */ 'pages/TFPage')
const WasmPage = () => import('pages/WasmPage')

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'settings',
          name: 'SettingPage',
          component: SettingPage
        },
        {
          path: 'tf',
          name: 'TFPage',
          component: TFPage
        },
        {
          path: 'wasm',
          name: 'WasmPage',
          component: WasmPage
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  next();
});

export default router;
