<template>
  <q-checkbox
    v-bind="attrs"
    :id="name"
    :name="name"
    :model-value="modelValue"
    @update:modelValue="(v) => $emit('update:modelValue', v)"
  />
  <!-- :modelValue="modelValue" -->
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
// import { useField } from 'vee-validate';
export default {
  name: "Checkbox",
  props: setProps(),
  emits: ["update:modelValue"],
  setup(props, context) {
    let obj = scaffoldField(props, context);

    return obj;
  },
};
</script>
