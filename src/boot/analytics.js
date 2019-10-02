import VueAnalytics from 'vue-analytics';

export default ({ router, Vue }) => {
  Vue.use(VueAnalytics, {
    id: 'GA-ID',

    // Track pages
    router,

    // Disable track on local development
    debug: {
      sendHitTask: process.env.NODE_ENV !== 'development',
    },
  });
};
