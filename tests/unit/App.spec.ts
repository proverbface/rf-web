import App from '@/App.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
// import VueApollo from 'vue-apollo';
// import Auth from '@/auth/auth';

describe('App.vue', () => {
  let localVue: any;
  beforeEach(() => {
    localVue = createLocalVue();
    // localVue.use(Auth, {});
    localVue.use(VueRouter, {});
    // localVue.use(VueApollo, {});
  });

  test('is a Vue instance', () => {
    const wrapper = shallowMount(App, { localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
