<template>
  <div class="q-pa-md">
    <q-card>
      <q-form @submit="onSubmit">
        <q-card-section>
          <q-input
            v-model="model.email"
            filled
            label="Email"
            type="email"
            lazy-rules
            :rules="rules.email"
          >
            <template v-slot:append>
              <q-icon name="mail_outline" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="model.password"
            filled
            label="Password"
            type="password"
            lazy-rules
            :rules="rules.password"
          >
            <template v-slot:append>
              <q-icon name="vpn_key" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            :loading="isSubmitting"
            outline
            class="full-width"
            label="Submit"
            type="submit"
            color="primary"
          >
            <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Logging in...
            </template>
          </q-btn>
        </q-card-actions>
      </q-form>
    </q-card>

    <response-error-banner
      v-if="error"
      :error="error"
    />
  </div>
</template>

<script>
import ExampleService from 'services/example';
import ResponseErrorBanner from 'components/ResponseErrorBanner';

export default {
  name: 'LoginForm',

  components: {
    ResponseErrorBanner,
  },

  data() {
    return {
      exampleService: new ExampleService(),
      rules: {
        email: [
          val => !!val || '* Required',
        ],
        password: [
          val => !!val || '* Required',
        ],
      },
      model: {
        email: '',
        password: '',
      },
      isSubmitting: false,
      error: null,
    };
  },

  methods: {
    async onSubmit() {
      this.isSubmitting = true;
      const { email, password } = this.model;

      const { data, error } = await this.exampleService.login(email, password);

      this.error = error;
      this.isSubmitting = false;

      if (!this.error) {
        await this.$store.dispatch('app/initUser', data);
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>
</style>
