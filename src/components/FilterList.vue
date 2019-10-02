<template>
  <div class="row">
    <div
      v-for="(filter, index) of filters"
      :key="index"
      class="col-12 col-sm-6 q-pa-sm"
    >
      <q-card class="text-center">
        <q-item
          clickable
          :to="filter.to"
          exact
        >
          <q-item-section>
            <q-icon
              :name="filter.icon"
              :size="iconSize"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1">
              {{ filter.name }}
            </q-item-label>
          </q-item-section>

          <q-item-section avatar>
            <q-icon name="chevron_right" />
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterList',

  props: {
    filters: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      iconSize: this.$q.platform.is.mobile
        ? '30vw'
        : '15vw',
    };
  },
};
</script>

<style>
</style>
