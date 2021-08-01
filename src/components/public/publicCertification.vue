<template>
  <md-card class="md-card-unspaced public-certification-card rfider-shadow">
    <md-card-content>
      <img
        :src="`${settings.gcpPublicBucketUri}/${certification.image}`"
        class="public-certification-image"
      />
      <div class="public-certification-title">
        {{ certification.title }}
      </div>
      <div>
        <small>{{ certification.description }}</small>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
import settings from '@/settings';
export default {
  data() {
    return {
      settings: settings,
    };
  },
  props: {
    certification: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-certification.scss';
</style>
