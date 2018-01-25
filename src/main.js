// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入路由
import router from './router'

import 'normalize.css'
import './assets/reset.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false


// 这里定义了两个全局组件 Hello 和 Jack
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   // 引入路由
  template: '<App />',
  components: { App }
})
