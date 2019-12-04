import { ref } from '@vue/composition-api';

export default {
  setup(_, { root }) {
    function back(e) {
      if (e.target.id !== 'appointment-overlay') return;

      root.$router.push({
        name: 'results',
        query: root.$route.query,
      });
    }

    const name = ref('');
    const phone = ref('');

    async function makeAppointment(e) {
      const serverUrl = process.env.SERVER_URL;
      const form = e.target;
      const formData = new FormData(form);
      formData.append('service', root.$route.query.service);
      formData.append(
        'datetime',
        `${root.$route.query.date} ${root.$route.query.time}`,
      );
      formData.append('saloon', root.$route.params.saloon);
      try {
        await root.$axios.$post(`${serverUrl}/api/appointment/`, formData);
      } catch (err) {
        alert(`Ошибка ${err}`);
        return;
      }
      alert('Вы успешно записаны');
      root.$router.push({
        name: 'results',
        query: root.$route.query,
      });
    }

    return {
      back,
      name,
      phone,
      makeAppointment,
    };
  },
};
