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
    const serviceId = ref(root.$route.query.serviceId);
    const date = ref(root.$route.query.date);
    const time = ref(root.$route.query.time);

    root.$store.dispatch('saloons/fetch', root.$route.query);
    const saloons = computed(() => root.$store.getters['saloons/saloons']);

    function updateQuery() {
      const query = {
        serviceId: serviceId.value,
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
      serviceId,
      date,
      time,
      saloons,
      updateQuery,
    };
  },
};
