<template>
  <q-page class="flex flex-center">
    <q-card
      flat
      class="text-center"
    >
      <img
        src="~assets/sad.svg"
      >
      <q-card-section>
        <div class="text-faded">
          Sorry, nothing here...<strong>(404)</strong>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          color="primary"
          style="width:200px;"
          @click="$router.push('/')"
        >
          Go back
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Error404',
};
</script>
