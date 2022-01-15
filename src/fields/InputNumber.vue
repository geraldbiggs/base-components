<template>
  <q-input
    :model-value="modelValue"
    :class="classes"
    :name="name"
    v-bind="attrs"
    type="number"
    @update:modelValue="(v) => $emit('update:modelValue', v)"
  />
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
// import { useField } from 'vee-validate';
export default {
  name: "InputNumber",
  props: setProps(),
  emits: ["update:modelValue"],
  setup(props, context) {
    let obj = scaffoldField(props, context);
    // const {
    //   value: inputValue,
    //   handleBlur,
    //   handleChange,
    // } = useField(props.name, undefined, {
    //   initialValue: props.value,
    // });

    return obj;
  },
};
</script>
