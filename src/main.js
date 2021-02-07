import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './https'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
Vue.prototype.$axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
