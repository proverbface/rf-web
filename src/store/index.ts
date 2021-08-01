import Vue from 'vue';
import Vuex from 'vuex';
import ModuleCore from '@/store/modules/core';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    core: ModuleCore,
  },
});
