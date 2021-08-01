<template>
  <div
    class="public-button-bg"
    v-if="info.urlProductInfo || info.urlShopping || info.urlLearnMore"
  >
    <div class="public-button md-layout md-gutter-md md-alignment-top-center">
      <a :href="info.urlProductInfo" target="_blank" v-if="info.urlProductInfo">
        <img
          class="public-button-shadow public-button-image"
          :src="'/img/public/icon-product-info.png'"
        />
      </a>
      <a :href="info.urlShopping" target="_blank" v-if="info.urlShopping">
        <img
          class="public-button-shadow public-button-image"
          :src="'/img/public/icon-shop.png'"
        />
      </a>

      <div class="public-button-thumb" v-if="info.urlLearnMore">
        <a :href="info.urlLearnMore" target="_blank">
          <img
            class="public-button-shadow public-button-image"
            :src="
              getThumb(`${this.settings.gcpPublicBucketUri}/${this.info.image}`)
            "
          />
          <img
            class="public-button-thumb-bg"
            :src="'/img/public/icon-learn-more.png'"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import settings from '@/settings';
import thumb from '../../mixins/thumb.ts';

export default {
  mixins: [thumb],
  data() {
    return {
      settings: settings,
    };
  },
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-button.scss';
</style>
