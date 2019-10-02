<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <q-card
        square
        class="col-xs-12 col-sm-6"
      >
        <q-img
          src="statics/bike-lane.jpg"
          :ratio="16/9"
        />

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img :src="profileImage">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>
              Name
            </q-item-label>
            <q-item-label caption>
              {{ profile.name }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <q-icon
                name="mail_outline"
                size="32px"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Email
            </q-item-label>
            <q-item-label caption>
              {{ profile.email }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <q-icon
                name="phone"
                size="32px"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Phone
            </q-item-label>
            <q-item-label caption>
              {{ profile.profile.phone }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <q-icon
                name="calendar_today"
                size="32px"
              />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Birthday
            </q-item-label>
            <q-item-label caption>
              {{ birthday }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Profile',

  data() {
    const profile = this.$store.getters['app/getUserProfile'];

    return {
      profile,
    };
  },

  computed: {
    profileImage() {
      return this.profile.picture || 'statics/account_circle.svg';
    },

    birthday() {
      return (new Date(this.profile.profile.birthday)).toDateString();
    },
  },
};
</script>

<style>
</style>
