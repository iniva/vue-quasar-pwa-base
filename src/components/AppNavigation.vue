<template>
  <div>
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-avatar>
          <img
            :alt="appName"
            src="~assets/app-icon.png"
          >
        </q-avatar>

        <q-tabs
          narrow-indicator
          active-color="white"
          indicator-color="accent"
          no-caps
        >
          <q-route-tab
            to="/"
            :label="appName"
            exact
          />
        </q-tabs>

        <q-space />

        <q-tabs
          narrow-indicator
          active-color="white"
          indicator-color="accent"
          no-caps
          inline-label
        >
          <q-route-tab
            v-if="!profile"
            :to="{ name: 'login' }"
            label="Login"
            exact
          />
          <q-btn-dropdown
            v-else
            auto-close
            stretch
            flat
            no-caps
            :label="profile.firstName"
            icon="person"
          >
            <q-list link>
              <q-item
                clickable
                to="/profile"
                exact
              >
                <q-item-section>Profile</q-item-section>
              </q-item>

              <q-item
                clickable
                @click="logout"
              >
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
import { openURL } from 'quasar';

import { APP_NAME } from 'src/constants/app';

export default {
  name: 'AppNavigation',

  data() {
    return {};
  },

  computed: {
    appName() {
      return APP_NAME;
    },

    profile() {
      return this.$store.getters['app/getUserProfile'];
    },
  },

  methods: {
    openURL,

    logout() {
      this.$store.dispatch('app/resetUser');
      this.$router.push('/');
    },
  },
};
</script>

<style>
</style>
