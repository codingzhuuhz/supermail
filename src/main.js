import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import VueResource from 'vue-resource'
import store from "@/store";
Vue.config.productionTip = false
Vue.use(VueResource)
// Vue.prototype 原型   Vue()vue实例作为一个事件总线
Vue.prototype.$bus = new Vue()
new Vue({
//  VueResource,
  router,
  store,
  render: h => h(App),
}).$mount('#app')




