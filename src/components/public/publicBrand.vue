<template>
  <div>
    <div class="public-brand">
      <img
        :src="`${settings.gcpPublicBucketUri}/${item.image}`"
        class="public-brand-img"
      />
      <img
        :src="`${settings.gcpPublicBucketUri}/${item.logo}`"
        class="public-brand-logo"
      />
    </div>

    <md-card class="md-card-unspaced public-card rfider-shadow">
      <md-card-content>
        <div class="public-card-avatar-icon">
          <img
            :src="`${settings.gcpPublicBucketUri}/${item.avatar}`"
            alt="product brand"
            class="public-card-avatar"
          />
          <md-icon class="public-card-icon">check</md-icon>
        </div>
        <div class="public-card-name">
          {{ item.name }} <br />
          <span v-if="lastInteraction" class="md-subheading"
            >{{ lastInteraction.identifiedItemId }}
            <br />
            Views today: 400
          </span>
        </div>
        <div
          class="public-card-short-description"
          v-html="item.shortDescription"
        ></div>
      </md-card-content>
    </md-card>
  </div>
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
    item: {
      type: Object,
      required: true,
    },
    lastInteraction: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-brand.scss';
</style>
