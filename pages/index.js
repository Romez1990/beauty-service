import { ref } from '@vue/composition-api';

export default {
  async asyncData({ store }) {
    await store.dispatch('services/fetch');
    const serviceGroups = store.getters['services/serviceGroups'];
    return {
      serviceGroups,
    };
  },

  setup(_, { root }) {
    const serviceId = ref('');

    function getDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date
        .getDate()
        .toString()
        .padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function getTime(date) {
      const hours = date
        .getHours()
        .toString()
        .padStart(2, '0');
      const minutes = date
        .getMinutes()
        .toString()
        .padStart(2, '0');
      return `${hours}:${minutes}`;
    }

    const currentDate = new Date();
    const date = ref(getDate(currentDate));
    const time = ref(getTime(currentDate));

    function find() {
      if (!serviceId.value) {
        alert('Выберите услугу');
        return;
      }

      root.$router.push({
        name: 'results',
        query: {
          serviceId: serviceId.value,
          date: date.value,
          time: time.value,
        },
      });
    }

    return {
      serviceId,
      date,
      time,
      find,
    };
  },
};
