import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'pages/HomePage'
import SettingPage from 'pages/SettingPage'
import MainPage from 'pages/MainPage'

Vue.use(Router)

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
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from);
  next();
});

export default router;
