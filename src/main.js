// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import 'lib-flexible'

Vue.config.productionTip = false
Vue.prototype.$http=axios;
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  next();
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
