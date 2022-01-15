<template>
  <router-link
    v-slot="{ href, navigate, isActive }"
    :to="to"
    style="text-decoration: none"
  >
    <base-button
      v-bind="$attrs"
      :label="label"
      :active="isActive"
      :href="href"
      :color="color"
      size="sm"
      @click="navigate"
    />
  </router-link>
</template>
<script>
export default {
  name: "RouterButton",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
    to: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      /* UX */
    };
  },
};
</script>
