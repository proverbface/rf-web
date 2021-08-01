<template>
  <div class="public-certification" v-if="items">
    <div class="public-certification-wrapper">
      <swiper :options="swiperOption" v-if="items.length > 2">
        <swiper-slide v-for="(certification, index) in items" :key="index">
          <public-certification
            :certification="certification"
          ></public-certification>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div
      :class="{ 'md-layout md-gutter': items.length === 2 }"
      v-if="items.length <= 2"
    >
      <div
        v-for="(certification, index) in items"
        :key="index"
        :class="{
          'md-layout-item md-size-50 public-certification-wrapper':
            items.length === 2,
        }"
      >
        <public-certification
          :certification="certification"
        ></public-certification>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import PublicCertification from './publicCertification.vue';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
    PublicCertification,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_public-certification.scss';
</style>
