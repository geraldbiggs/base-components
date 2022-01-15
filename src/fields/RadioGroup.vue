<template>
  <q-option-group
    v-model="value"
    :name="name"
    type="radio"
    :color="color"
    :inline="inline"
  />
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "RadioGroup",
  props: setProps({
    isHorizontal: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "primary",
    },
  }),
  setup(props, context) {
    let { attrs, ...obj } = scaffoldField(props, context);
    let { isHorizontal, color, ...final } = attrs;
    return {
      attrs: final,
      ...obj,
    };
  },
};
</script>
