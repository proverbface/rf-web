<template>
  <div :data-item-id="item._id" class="box-interactions">
    <md-card class="md-card-plain">
      <div class="user-data">
        <div class="md-layout md-gutter-sm md-alignment-center-left">
          <div class="md-layout-item">
            <img
              class="user-avatar md-round"
              src="/img/avatars/avatar-user-profile-default.png"
              alt="avatar user profile"
            />
          </div>
          <div class="md-layout-item user-info">
            <div class="user-name">
              <!-- {{ item.startedBy.name || 'Anonymous' }} -->
              <small class="date-interaction">
                {{ displayTimeZone(item.createdAt, 'DD/MM/YYYY [at] h:mm A') }}
              </small>
              <small>
                {{
                  item.startedBy.channel
                    ? ` | By ${item.startedBy.channel}`
                    : ''
                }}
              </small>
              <br />
            </div>
            <!-- <div class="date-interaction">
              <small>
                {{ displayTimeZone(item.createdAt, 'DD/MM/YYYY [at] h:mm A') }}
              </small>
            </div> -->
          </div>
        </div>
      </div>
      <div class="interaction-card">
        <md-card-header class="header-interactions">
          <div class="md-layout md-gutter-sm md-alignment-center-left">
            <div class="md-layout-item">
              <div v-if="!item.isAdmin" class="avatar">
                <img
                  :src="item.image || '/img/avatars/avatar-task-default.png'"
                  alt="avatar task"
                />
                <span :class="'rfider-status-' + item.status + '-color'"></span>
              </div>
              <md-icon v-else class="md-size-1-5x">check_box</md-icon>
            </div>
            <div class="md-layout-item title-interaction">
              {{ item.isAdmin ? $t(item.title) : item.title }}
            </div>
            <!-- <div class="md-layout-item md-layout-item--no-grow">
              <md-button
                class="md-simple md-just-icon btn-expand"
                @click="toggleExpand"
              >
                <md-icon>expand_more</md-icon>
              </md-button>
            </div> -->
          </div>
        </md-card-header>
        <!-- <md-content
          class="md-scrollbar stepflow-interactions"
          v-show="item._stateOpened"
        >
          <div class="steps" v-for="(step, index) in item.steps" :key="index">
            <div class="md-layout md-gutter-sm md-alignment-top-left">
              <div class="md-layout-item" :class="'step-status-' + step.status">
                <md-icon v-if="step.status == 0">error</md-icon>
                <md-icon v-else class="md-size-small md-icon-dot"></md-icon>
              </div>
              <div
                class="md-layout-item title-interaction step-title"
                :class="[{ 'step-description': step.description }]"
              >
                {{ step.name }}
                <br />
                <small v-if="step.description">{{ step.description }}</small>
              </div>
              <div
                v-if="step.metadata && step.metadata.attachments.length"
                class="md-layout-item md-layout-item--no-grow"
              >
                <md-button
                  class="md-simple md-just-icon attaches"
                  @click="openAttachmentsGallery(step)"
                >
                  <md-icon>attach_file</md-icon>
                  <span class="notification">
                    {{ step.metadata.attachments.length }}
                  </span>
                </md-button>
              </div>
            </div>
          </div>
          <div v-if="item.actions">
            <div
              class="step-changed"
              v-for="(action, index) in item.actions"
              :key="index"
            >
              {{ $t('interaction_action_' + action.type) }}
              <span> {{ $t(action.message) }}</span>
            </div>
            <div
              class="step-changed"
              v-if="item.status >= 0 && item.statusMessage"
            >
              {{ $t('interaction_action_0') }}
              <span> {{ item.statusMessage }}</span>
            </div>
          </div>
        </md-content> -->
        <md-card-header class="footer-interactions">
          <div class="md-layout md-gutter-sm md-alignment-center-left">
            <div
              v-if="!item.isAdmin && enrichedData"
              class="md-layout-item whether-info"
            >
              {{ enrichedData.location }}
              <br />
              {{ enrichedData.weather }}
            </div>
          </div>
        </md-card-header>
      </div>
    </md-card>
  </div>
</template>

<script>
import settings from '@/settings';
// import { IdState } from 'vue-virtual-scroller';
import timeZone from '@/mixins/timeZone';

export default {
  mixins: [
    // IdState({
    //   idProp: vm => vm.item._id,
    // }),
    timeZone,
  ],
  props: {
    item: Object,
  },
  data() {
    return {
      enrichedData: null,
    };
  },
  // idState() {
  //   return {};
  // },
  watch: {
    item: {
      immediate: true,
      handler(newItem, oldItem) {
        if (newItem.metadata) {
          const { temp, rh, aqi } = newItem.metadata.location.weather || {};
          const { components } = newItem.metadata.location.details || {};

          this.enrichedData = {};

          if (components) {
            const location = components
              .filter(element => {
                return element.types.includes('political');
              })
              .slice(-2);

            if (location.length > 0) {
              let city = location[0] ? location[0].long_name : null;
              let country = location[1] ? location[1].long_name : null;
              if (city) {
                this.enrichedData.location = city;
                if (country) {
                  this.enrichedData.location = `${city}, ${country}`;
                }
              }
            } else {
              this.enrichedData.location = 'Unknown Location';
            }
          }

          if (temp && rh && aqi) {
            this.enrichedData.weather =
              `${temp}°C` + ' | ' + `RH ${rh}%` + ' | ' + `AQI ${aqi}`;
          } else {
            this.enrichedData.weather = 'Weather Unavailable';
          }
        } else {
          this.enrichedData = null;
        }
      },
    },
  },
  methods: {
    toggleExpand() {
      this.item._stateOpened = !this.item._stateOpened;
    },
    openAttachmentsGallery(step) {
      let attachments = step.metadata.attachments.map(
        item => `${settings.gcpPublicBucketUri}/${item.file}`,
      );
      this.$emit('on-open-attachments', attachments);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/public/_interactions-item.scss';
</style>
