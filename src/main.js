import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueRellax from 'vue-rellax'

Vue.use(Vuex)
Vue.use(VueScrollTo)
Vue.use(VueRellax)
library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
