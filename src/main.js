import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import http from './api'

import forEach from 'lodash/forEach'

import './style/main.styl'

// AUTOMATIC LOAD ALL COMPONENTS.
function requireAllComponents (requireContext) {
  var keys = requireContext.keys()
  forEach(keys, k => {
    var modulo = requireContext(k)
    var nome = k.match(/([^/]*).vue$/)
    Vue.component(nome[1], modulo.default || modulo)
  })
}
requireAllComponents(require.context('./components', true, /[A-Za-z]\w+\.(vue)$/))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
