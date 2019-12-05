export default {
  setup() {
    if (process.browser) {
      const serverUrl = process.env.SERVER_URL;
      location.href = `${serverUrl}/admin/`;
    }
  },
};
