<template>
  <base-button
    size="sm"
    flat
    dense
    color="primary"
    icon="edit"
    :label="label"
    v-bind="$attrs"
  />
</template>
<script>
export default {
  name: "ButtonEditFlat",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
  },
  computed: {
    attrs() {
      const { label, ...attrs } = this.$attrs;
      return attrs;
    },
  },
};
</script>
