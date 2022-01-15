<template>
  <q-field stack-label v-bind="attrs" borderless>
    <template #control>
      <slot />
    </template>
  </q-field>
</template>
<script>
export default {
  name: "VerticalField",
  inheritAttrs: false,
  props: {
    value: {
      type: null,
      default: null,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    listeners() {
      const { ...listeners } = this.$attrs;
      return listeners;
    },
    attrs() {
      const { rules, ...attrs } = this.$attrs;
      return attrs;
    },
  },
};
</script>
