<template>
  <q-page class="flex flex-center">
    <login-form />
  </q-page>
</template>

<script>
import LoginForm from 'components/LoginForm';

export default {
  name: 'Login',

  components: {
    LoginForm,
  },
};
</script>

<style>
</style>
