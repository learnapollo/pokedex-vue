import Vue from 'vue';
import App from './components/app.vue';
import router from './router';
import './apollo';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
