export default {
  async asyncData({ $axios }) {
    const serverUrl = process.env.SERVER_URL;
    const groups = await $axios.$get(`${serverUrl}/api/services/`);

    return {
      groups,
    };
  },

  setup() {
    const groups = [];

    return {
      groups,
    };
  },
};
