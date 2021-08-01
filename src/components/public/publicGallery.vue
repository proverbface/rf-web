<template>
  <div>
    <lingallery
      class="public-gallery rfider-shadow"
      v-if="items.length"
      :items="imageRows"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import settings from '@/settings';
import Lingallery from 'lingallery';

export default {
  data() {
    return {
      width: '100%',
      height: 400,
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    imageRows() {
      if (this.items) {
        return this.items.map(item => {
          const image = `${settings.gcpPublicBucketUri}/${item.image}`;
          return {
            src: image,
            thumbnail: image,
          };
        });
      }
      return [];
    },
  },
  components: {
    Lingallery,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-gallery.scss';
</style>
