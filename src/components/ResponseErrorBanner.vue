<template>
  <q-banner
    dense
    class="bg-grey-3 text-center q-mt-sm"
  >
    <template v-slot:avatar>
      <q-icon
        name="warning"
        color="red"
      />
    </template>
    <span class="text-subtitle1">
      {{ error.message }}
    </span>
  </q-banner>
</template>

<script>
export default {
  name: 'ResponseErrorBanner',

  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>
