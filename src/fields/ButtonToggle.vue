<template>
  <!-- <q-option-group
    :name="name"
    :value="value"
    type="radio"
    :color="color"
    v-bind="attrs"
    :inline="inline"
    @input="update"
    v-on="listeners"
  /> -->

  <q-btn-toggle
    v-model="value"
    :name="name"
    :toggle-color="color"
    v-bind="attrs"
  />
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "ButtonToggle",
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
    let obj = scaffoldField(props, context);
    return obj;
  },
};
</script>
