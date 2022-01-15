<template>
  <base-button
    flat
    dense
    :color="color"
    size="sm"
    icon="add"
    :label="label"
    v-bind="$attrs"
  />
</template>
<script>
export default {
  name: "ButtonAddRow",
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: "primary",
    },
    label: {
      type: String,
      default: "Add",
    },
  },
  setup(props, context) {
    const { color, ...attrs } = context.attrs;
    return { attrs };
  },
};
</script>
