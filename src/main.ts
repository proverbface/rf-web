import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import DashboardPlugin from './material-dashboard';
import store from '@/store';
import './registerServiceWorker';
import App from './App.vue';
import VueI18n from 'vue-i18n';
import Messages from '@/utils/i18n/Messages';
import Lingallery from 'lingallery';

Vue.config.productionTip = false;

// plugin setup
Vue.use(VueRouter);
Vue.use(DashboardPlugin);
Vue.use(VueI18n);
Vue.component('lingallery', Lingallery);

// language support setup
const i18n = new VueI18n({
  locale: 'en',
  messages: Messages,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h: any) => h(App),
  router,
  store,
  i18n,
});
