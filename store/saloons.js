export const state = () => ({
  prices: [],
});

export const actions = {
  async fetch(state, query) {
    const serverUrl = process.env.SERVER_URL;
    const prices = await this.$axios.$get(
      `${serverUrl}/api/free-saloons/?service=${query.service}&datetime=${query.date} ${query.time}`,
    );
    state.commit('setPrices', prices);
  },
};

export const mutations = {
  setPrices(state, prices) {
    state.prices = prices;
  },
};

export const getters = {
  prices(state) {
    return state.prices;
  },
};
