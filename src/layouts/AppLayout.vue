<template>
  <q-layout view="lHh Lpr lFf">
    <app-navigation />

    <app-footer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AppNavigation from 'components/AppNavigation';
import AppFooter from 'components/AppFooter';

export default {
  name: 'AppLayout',

  components: {
    AppNavigation,
    AppFooter,
  },

  data() {
    return {

    };
  },
};
</script>

<style>
</style>
