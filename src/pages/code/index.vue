<template>
  <div class="public-container">
    <error-page v-if="apiDown"></error-page>
    <error-page
      v-else-if="locationEnabled !== true"
      :message="locationEnabled"
      :caption="caption"
    ></error-page>
    <div v-else>
      <loading-page v-if="loading"></loading-page>
      <result-page v-else :data="taskResult"></result-page>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapState } from 'vuex';
import settings from '@/settings';
import ErrorPage from '../errorPage.vue';
import ResultPage from '../resultPage.vue';
import LoadingPage from '../loadingPage.vue';

export default {
  components: {
    ErrorPage,
    ResultPage,
    LoadingPage,
  },
  data: () => ({
    loading: true,
    locationEnabled: true,
    locationErrorDefaultMessage: "Oops, we couldn't access your location",
    caption: '',
  }),
  computed: {
    ...mapState('core', ['taskResult', 'apiDown']),
  },
  watch: {
    taskResult: {
      immediate: true,
      handler(newVal, oldVal) {
        this.loading = !newVal;
      },
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.check();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.check();
    next();
  },
  methods: {
    check() {
      this.checkTest();
    },
    checkTest() {
      store
        .dispatch('core/runTask', {
          latitude: '-36.848461',
          longitude: '174.763336',
        })
        .catch(err => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.public-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding-bottom: 25px;
}
</style>
