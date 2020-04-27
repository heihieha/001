import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import * as api from './api'
Vue.prototype.$api = api

import './assets/js/flexible.min.js'

//cook
import jsCookie from 'js-cookie'
Vue.prototype.$jsCookie = jsCookie


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
