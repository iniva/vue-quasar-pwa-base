<template>
  <q-page class="q-pa-md">
    <filter-list :filters="links" />
  </q-page>
</template>

<script>
import FilterList from 'components/FilterList';

export default {
  name: 'Home',

  components: {
    FilterList,
  },

  data() {
    return {
      links: [
        {
          name: 'Login',
          to: { name: 'login' },
          icon: 'input',
        },
        {
          name: 'This Page',
          to: { name: 'home' },
          icon: 'house',
        },
      ],
    };
  },
};
</script>

<style>
</style>
