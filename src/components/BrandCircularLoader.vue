<template>
  <div class="flex flex-center">
    <q-circular-progress
      show-value
      indeterminate
      class="text-white q-ma-md text-center"
      :size="settings.size"
      :thickness="settings.thickness"
      :color="settings.color"
      :center-color="settings.centerColor"
      track-color="transparent"
    >
      <q-icon :name="settings.iconName" />
    </q-circular-progress>
  </div>
</template>

<script>
export default {
  name: 'BrandCircularLoader',

  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    const defaults = {
      size: '90px',
      thickness: 0.2,
      color: 'primary',
      centerColor: 'grey-10',
      iconName: 'img:statics/app-logo-128x128.png',
    };
    const settings = {
      ...this.options,
      ...defaults,
    };

    return {
      settings,
    };
  },
};
</script>

<style>
</style>
