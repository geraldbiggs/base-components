<template>
  <q-input
    :model-value="modelValue"
    :name="name"
    type="text"
    @update:model-value="(v) => $emit('update:modelValue', v)"
  />
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "InputText",
  props: setProps(),
  emits: ["update:modelValue"],
  setup(props, context) {
    let obj = scaffoldField(props, context);
    return obj;
  },
};
</script>
