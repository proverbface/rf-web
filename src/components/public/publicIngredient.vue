<template>
  <div class="public-ingredient">
    <md-card class="md-card-unspaced public-ingredient-card rfider-shadow">
      <md-card-content>
        <div class="public-ingredient-card-content">{{ item }}</div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-ingredient.scss';
</style>
