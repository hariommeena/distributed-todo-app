import Vue from 'vue'
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
import BootstrapVue from 'bootstrap-vue'
import App from './App'



Vue.use(BootstrapVue)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
