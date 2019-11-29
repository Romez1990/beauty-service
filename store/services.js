export const state = () => ({
  serviceGroups: [],
});

export const actions = {
  async fetch(state) {
    const serverUrl = process.env.SERVER_URL;
    const serviceGroups = await this.$axios.$get(
      `${serverUrl}/api/service-groups/`,
    );
    state.commit('setServiceGroups', serviceGroups);
  },
};

export const mutations = {
  setServiceGroups(state, serviceGroups) {
    state.serviceGroups = serviceGroups;
  },
};

export const getters = {
  serviceGroups(state) {
    return state.serviceGroups;
  },
};
