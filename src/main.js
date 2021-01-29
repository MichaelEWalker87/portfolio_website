import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
