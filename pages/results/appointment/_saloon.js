export default {
  setup(_, { root }) {
    function back(e) {
      if (e.target.id !== 'appointment-overlay') return;

      root.$router.push({
        name: 'results',
        query: root.$route.query,
      });
    }

    return {
      back,
    };
  },
};
