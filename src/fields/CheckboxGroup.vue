<template>
  <q-option-group v-model="value" :name="name" type="checkbox" v-bind="attrs" />
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "CheckboxGroup",
  props: setProps({
    isHorizontal: {
      type: "boolean",
      default: false,
    },
  }),
  setup(props, context) {
    let { attrs, ...obj } = scaffoldField(props, context);
    let { isHorizontal, ...final } = attrs;
    return {
      attrs: final,
      ...obj,
    };
  },
};
</script>
