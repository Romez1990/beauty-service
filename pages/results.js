import { ref, computed } from '@vue/composition-api';

export default {
  async asyncData({ store, query }) {
    await store.dispatch('services/fetch');
    const serviceGroups = store.getters['services/serviceGroups'];

    return {
      serviceGroups,
    };
  },

  setup(_, { root }) {
    const service = ref(root.$route.query.service);
    const date = ref(root.$route.query.date);
    const time = ref(root.$route.query.time);

    root.$store.dispatch('saloons/fetch', root.$route.query);
    const prices = computed(() => root.$store.getters['saloons/prices']);

    function updateQuery() {
      const query = {
        service: service.value,
        date: date.value,
        time: time.value,
      };
      root.$router.push({
        name: 'results',
        query,
      });
      root.$store.dispatch('saloons/fetch', query);
    }

    return {
      service,
      date,
      time,
      prices,
      updateQuery,
    };
  },
};
