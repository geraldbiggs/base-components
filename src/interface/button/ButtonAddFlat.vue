<template>
  <base-button size="sm" flat dense :color="color" icon="add" 
    v-bind="attrs"
  />
</template>
<script>
export default {
  name: "ButtonAddFlat",
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },
  setup(props, context) {
    const {color, ...attrs} = context.attrs
    return {attrs}
  }
};
</script>
