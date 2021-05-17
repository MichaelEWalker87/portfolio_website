import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueSplide from '@splidejs/vue-splide';

Vue.config.productionTip = false

Vue.use( VueSplide );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueLazyload, {
  loading: 'dist/loading.gif',
  error: 'dist/error.png',
  attempt: 1,
  preLoad: 1.3,
})
