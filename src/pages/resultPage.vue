<template>
  <div class="result-page">
    <div class="result-page-top">
      <div>{{ newDate }}</div>
      <div>{{ data.result.location }}</div>
    </div>

    <div>
      <div class="result-page-gradient0" v-if="data.result.status === 0"></div>
      <div class="result-page-gradient1" v-if="data.result.status === 1"></div>
      <div class="result-page-gradient2" v-if="data.result.status === 2"></div>
      <img
        class="result-page-image"
        v-if="data.result.status === 0"
        :src="'/img/public/status-do-not-use.png'"
      />
      <img
        class="result-page-image"
        v-if="data.result.status === 1"
        :src="'/img/public/status-all-good.png'"
      />
      <img
        class="result-page-image"
        v-if="data.result.status === 2"
        :src="'/img/public/status-maybe-use.png'"
      />
      <br />
      <br />
      <span class="result-page-message">{{ data.result.message }}</span>
    </div>
    <!-- <div v-if="data.result.status === 1">
      <br />
      <router-link
        v-if="data && data.publicPageUri"
        tag="md-button"
        :to="{
          name: 'public',
          params: { orgId: data.orgId, interactionId: data.interactionId },
        }"
        class="md-raised md-primary"
      >
        Discover More
      </router-link>
    </div> -->
  </div>
</template>

<script>
// 0: do not use
// 1: all good
// 2: maybe use
import * as moment from 'moment';

export default {
  data() {
    return {
      newDate: '',
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.newDate = moment(this.data.result.date).format('DD-MM-YYYY HH:mm:ss');

    //go straight to public page if we allow showing public page in portal
    if (this.data.result.status === 1 && this.data.publicPageUri) {
      this.$router.replace({
        name: 'public',
        params: {
          orgId: this.data.orgId,
          interactionId: this.data.interactionId,
        },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_result-page.scss';
</style>
