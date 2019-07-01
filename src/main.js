import Vue from 'vue'
import App from './App.vue'
import { plugin } from 'vue-function-api'
import router from './router.config'

import utilscore,{EventEmitter} from 'utilscore'
Vue.config.productionTip = false
Vue.prototype.$utils = utilscore
Vue.prototype.$eventEmitter = new EventEmitter()
Vue.use(plugin)
console.log(router)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
