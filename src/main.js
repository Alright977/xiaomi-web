import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './https'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
Vue.prototype.$axios = axios
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg',
})
Vue.use(VueCookie)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
