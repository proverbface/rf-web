// Validation plugin used to validate forms
// import VeeValidate from 'vee-validate';
// A plugin file where you could register global components used across the app
// import GlobalComponents from './globalComponents';
// A plugin file where you could register global directives
// import GlobalDirectives from './globalDirectives';
// Tabs plugin. Used on Panels page.

import VueMaterial from 'vue-material';

// asset imports
import 'vue-material/dist/vue-material.min.css';
import './assets/scss/material-dashboard.scss';
//import './assets/scss/misc/_demo.scss';

// library auto imports
import 'es6-promise/auto';

export default {
  install(Vue: any) {
    // Vue.use(GlobalComponents);
    // Vue.use(GlobalDirectives);
    Vue.use(VueMaterial);
    // Vue.use(VeeValidate, { fieldsBagName: 'veeFields' });
  },
};
