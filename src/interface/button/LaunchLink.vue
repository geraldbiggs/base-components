<template>
  <router-button
    :to="to"
    class="text-right"
    icon-right="launch"
    :label="label"
    color="primary"
  />
</template>
<script>
export default {
  name: "LaunchLink",
  props: {
    to: {
      type: Object,
      default: () => {},
    },
    label: {
      type: String,
      default: null,
    },
  },
  setup() {
    return {};
  },
};
</script>
