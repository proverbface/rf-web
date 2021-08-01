<template>
  <div class="public-interactions" v-if="items">
    <p class="title">Activity</p>
    <div v-for="(interaction, index) in items" :key="index">
      <interactions-item
        @on-open-attachments="openAttachmentsGallery"
        :item="interaction"
      ></interactions-item>
    </div>
  </div>
</template>

<script>
import InteractionsItem from '../InteractionsItem';
export default {
  components: {
    InteractionsItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      attachments: false,
      visible: false,
    };
  },
  methods: {
    openAttachmentsGallery(attachments) {
      this.attachments = attachments;
      this.visible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-interactions.scss';
</style>
