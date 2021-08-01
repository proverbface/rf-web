<template>
  <div class="error-page">
    <img
      v-if="errorType === 'expired'"
      :src="'/img/public/rfider-link-expired.png'"
      class="error-page-image"
    />
    <img
      v-else
      :src="'/img/public/Bike_Animation_with-anthena.gif'"
      class="error-page-image"
    />
    <div v-if="message" class="error-page-message">{{ message }}</div>
    <div v-if="caption" class="error-page-caption">{{ caption }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: false,
      default: 'Oops, something went wrong',
    },
    caption: {
      type: String,
      required: false,
    },
    errorType: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_error-page.scss';
</style>
