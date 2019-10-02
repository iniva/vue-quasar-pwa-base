<template>
  <q-footer
    bordered
    class="bg-primary text-white"
  >
    <q-toolbar>
      <span title="Us">{{ appName }} by Your Name &copy; {{ year }}</span>
      <q-space />
      <span title="This App Version">v{{ appVersion }}</span>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { APP_NAME, APP_VERSION } from 'src/constants/app';

export default {
  name: 'AppFooter',

  computed: {
    year() {
      return (new Date()).getFullYear();
    },

    appName() {
      return APP_NAME;
    },

    appVersion() {
      return APP_VERSION;
    },
  },
};
</script>

<style>
</style>
