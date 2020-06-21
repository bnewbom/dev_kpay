import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import store from './stores/index.js';
import mySwiper from './plugins/swiper.js';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify,
  mySwiper
}).$mount('#app')
