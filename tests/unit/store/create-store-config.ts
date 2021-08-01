export default function createStore(Module: any) {
  const state = Module.state;
  const actions = Module.state;
  const mutations = Module.state;
  const getters = Module.state;

  return {
    state,
    actions,
    mutations,
    getters,
  };
}
