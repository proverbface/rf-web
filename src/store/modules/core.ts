import Vue from 'vue';
import { thingApi } from '@/api/http/api';
import { itemApi } from '@/api/http/items.api';

interface IState {
  code: string | null;
  publicInfo: any | null;
  taskResult: any | null;
  apiDown: boolean | false;
}

const state: IState = {
  code: null,
  publicInfo: null,
  taskResult: null,
  apiDown: false,
};

const mutations = {
  SET_CODE: function(state: IState, payload: any) {
    Vue.set(state, 'code', payload);
  },
  SET_TASK_RESULT: function(state: IState, payload: any) {
    Vue.set(state, 'taskResult', payload);
  },
  SET_PUBLIC_INFO: function(state: IState, payload: any) {
    Vue.set(state, 'publicInfo', payload);
  },
  SET_API_DOWN() {
    state.apiDown = true;
  },
  SET_API_ON() {
    state.apiDown = false;
  },
};

const actions = {
  setCode: async function(context: any, payload: any) {
    context.commit('SET_CODE', payload);
  },
  runTask: async function(context: any, payload: any) {
    context.commit('SET_API_ON');
    context.commit('SET_TASK_RESULT', null);

    return new Promise(async (resolve, reject) => {
      const code = context.state.code;

      try {
        const taskStatusResult = await new Promise(resolve =>
          setTimeout(() => {
            resolve({
              complete: true,
              success: true,
              orgId: 1,
              interactionId: '5e40a9c8e0',
              publicPageUri: '/public/api/data.json',
              result: {
                date: 1581296081278,
                detailedMessage: 'TEST-P15-000-AA',
                location: 'Auckland, New Zealand',
                message: 'Passed',
                status: 1,
              },
            });
          }, 1000),
        );
        context.commit('SET_CODE', null);
        context.commit('SET_TASK_RESULT', taskStatusResult);
        resolve(taskStatusResult);
      } catch (err) {
        context.commit('SET_API_DOWN');
        reject(err);
      }
    });
  },
  setPublicInfo: async function(context: any, payload: any) {
    return new Promise(async (resolve, reject) => {
      let organizationId = payload ? payload.organizationId : null;
      let interactionId = payload ? payload.interactionId : null;
      let publicInfo: any = null;

      try {
        const result = await thingApi.getPublic(organizationId, interactionId);
        publicInfo = result.data;

        if (publicInfo.interactions && publicInfo.interactions.length > 0) {
          const itemId = publicInfo.interactions[0].identifiedItemId;

          if (itemId) {
            try {
              const itemResult = await itemApi.getItem(itemId);
              publicInfo.info.viewCount =
                itemResult != null ? itemResult.viewCount : 0;
            } catch (error) {
              console.error('Could not fetch view count', error);
            }
          }
        }

        context.commit('SET_API_ON');
        context.commit('SET_PUBLIC_INFO', publicInfo);
      } catch (err) {
        console.log(err);
        context.commit('SET_API_DOWN');
      }

      if (publicInfo) {
        resolve(publicInfo);
      } else {
        reject();
      }
    });
  },
};

const getters = {};

const module = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default module;
