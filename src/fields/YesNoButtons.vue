<template>
  <q-field stack-label borderless :label="label">
    <template #control>
      <q-btn-toggle
        :model-value="modelValue"
        class="q-mt-sm"
        :name="name"
        type="radio"
        :toggle-color="color"
        v-bind="attrs"
        :options="[
          { label: 'Yes', value: true },
          { label: 'No', value: false },
        ]"
        @update:modelValue="(v) => $emit('update:modelValue', v)"
      />
    </template>
  </q-field>
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "YesNoButtons",
  props: setProps({
    label: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "primary",
    },
  }),
  setup(props, context) {
    let { attrs, ...obj } = scaffoldField(props, context);
    let { label, color, ...final } = attrs;
    return { attrs: final, ...obj };
  },
};
</script>
