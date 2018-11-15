import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from './config';
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueWechatTitle from 'vue-wechat-title';

Vue.use(VueWechatTitle)
Vue.use(iView)
Vue.prototype.$config = config
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')