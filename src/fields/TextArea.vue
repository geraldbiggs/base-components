<template>
  <q-input
    :model-value="modelValue"
    v-bind="attrs"
    :name="name"
    type="textarea"
    @update:modelValue="(v) => $emit('update:modelValue', v)"
  />
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "TextArea",
  props: setProps(),
  emits: ["update:modelValue"],
  setup(props, context) {
    let obj = scaffoldField(props, context);
    return obj;
  },
};
</script>
