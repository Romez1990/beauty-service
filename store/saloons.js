export const state = () => ({
  saloons: [],
});

export const actions = {
  async fetch(state, query) {
    const serverUrl = process.env.SERVER_URL;
    const saloons = await this.$axios.$get(
      `${serverUrl}/api/free-saloons/?service=${query.service}&datetime=${query.date} ${query.time}`,
    );
    state.commit('setSaloons', saloons);
  },
};

export const mutations = {
  setSaloons(state, saloons) {
    state.saloons = saloons;
  },
};

export const getters = {
  saloons(state) {
    return state.saloons;
  },
};
