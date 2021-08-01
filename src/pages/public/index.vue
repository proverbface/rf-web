 <template>
  <div class="public-container">
    <error-page
      v-if="apiDown"
      error-type="expired"
      :message="'This link has expired'"
    ></error-page>
    <div v-else>
      <public-buttons
        v-if="publicInfo && publicInfo.info && displayButtons"
        :info="publicInfo.info"
      ></public-buttons>

      <public-brand
        v-if="publicInfo"
        :item="publicInfo.info"
        :lastInteraction="
          publicInfo.interactions && publicInfo.interactions.length
            ? publicInfo.interactions[0]
            : null
        "
      ></public-brand>
      <public-gallery
        v-if="publicInfo && publicInfo.info.gallery"
        :items="publicInfo.info.gallery"
      ></public-gallery>
      <public-video
        v-if="publicInfo && publicInfo.info.videoGallery"
        :items="publicInfo.info.videoGallery"
      ></public-video>
      <public-certifications
        v-if="publicInfo && publicInfo.info.certifications"
        :items="publicInfo.info.certifications"
      ></public-certifications>
      <public-ingredient
        v-if="publicInfo && publicInfo.info.longDescription"
        :item="publicInfo.info.longDescription"
      ></public-ingredient>
      <public-interactions
        v-if="publicInfo && publicInfo.interactions"
        :items="publicInfo.interactions"
      ></public-interactions>
    </div>
  </div>
</template>

<script>
import PublicBrand from '@/components/public/publicBrand.vue';
import PublicCertifications from '@/components/public/publicCertifications.vue';
import PublicGallery from '@/components/public/publicGallery.vue';
import PublicIngredient from '@/components/public/publicIngredient.vue';
import PublicVideo from '@/components/public/publicVideo.vue';
import PublicInteractions from '@/components/public/publicInteractions.vue';
import PublicButtons from '@/components/public/publicButtons.vue';
import store from '@/store';
import { mapState } from 'vuex';
import ErrorPage from '../errorPage.vue';

export default {
  components: {
    PublicBrand,
    PublicCertifications,
    PublicGallery,
    PublicIngredient,
    PublicVideo,
    ErrorPage,
    PublicInteractions,
    PublicButtons,
  },
  computed: {
    ...mapState('core', ['publicInfo', 'apiDown']),
    displayButtons() {
      try {
        return (
          String(
            this.publicInfo.interactions[0].startedBy.channel,
          ).toLowerCase() !== 'wechat'
        );
      } catch (err) {
        return true;
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      store.dispatch('core/setPublicInfo', {
        organizationId: to.params.orgId,
        interactionId: to.params.interactionId,
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    store.dispatch('core/setPublicInfo', {
      organizationId: to.params.orgId,
      interactionId: to.params.interactionId,
    });
    next();
  },
};
</script>

<style lang="scss" scoped>
.public-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  padding-bottom: 135px;
}
</style>
