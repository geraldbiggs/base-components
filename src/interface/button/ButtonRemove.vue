<template>
  <base-button size="sm" round icon="delete" v-bind="attrs" />
</template>
<script>
export default {
  name: "ButtonRemove",
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null,
    },
  },
  computed: {
    // listeners() {
    //   const { ...listeners } = this.$attrs;
    //   return listeners;
    // },
    attrs() {
      const { label, ...attrs } = this.$attrs;
      return attrs;
    },
  },
};
</script>
