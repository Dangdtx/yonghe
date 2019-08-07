import Vue from 'vue'
import App from './App.vue'  
import store from "store"
import router from "router/index.js"
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false

new Vue({ 
  store,
  router,
  render: h => h(App)
}).$mount('#app')
