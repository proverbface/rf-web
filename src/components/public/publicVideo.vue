<template>
  <div class="public-video">
    <div
      class="public-video-iframe rfider-shadow"
      v-for="(video, index) in items"
      :key="index"
    >
      <iframe
        :src="video.url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-video.scss';
</style>
