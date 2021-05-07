import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import Default from './layout/Default.vue'
import Blank from './layout/Blank.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.component('default-layout', Default)
Vue.component('blank-layout', Blank)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueAxios,axios);
