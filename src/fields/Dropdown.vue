<template>
  <q-select
    style="min-width: 100px"
    :name="name"
    :label="label"
    v-bind="final"
    map-options
    emit-value
    stack-label
    :options="defaultOptions"
    :option-label="labelKey"
    :option-value="valueKey"
    :model-value="modelValue"
    @update:model-value="(v) => $emit('update:modelValue', v)"
  >
    <template v-for="slot in Object.keys($slots)" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </q-select>
</template>
<script>
import { computed } from "vue";
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "Dropdown",
  props: setProps({
    field: { type: Object, default: () => {} },
    options: {
      type: Array,
      default: () => [],
    },
    map: { type: Boolean, default: false },
    optionMap: {
      type: Function,
      default: (x) => {
        return {
          label: x.name,
          value: x.id,
        };
      },
    },
    label: {
      type: String,
      default: null,
    },
    labelKey: {
      type: String,
      default: "label",
    },
    valueKey: {
      type: String,
      default: "value",
    },
  }),
  emits: ["update:modelValue"],
  setup(props, context) {
    const defaultOptions = computed(() => {
      let mergedOptions =
        props.options && props.options.length > 0
          ? props.options
          : props.field.fieldAttrs.options || [];

      let mappedOptions = props.map
        ? mergedOptions.map(props.field.fieldAttrs.optionMap || props.optionMap)
        : mergedOptions;

      return mergedOptions.length
        ? [{ label: "Select", value: null }].concat(mappedOptions)
        : [{ label: "Select", value: null }];
    });

    const { attrs, ...obj } = scaffoldField(props, context);
    const { label, labelKey, valueKey, ...final } = attrs;
    return { defaultOptions, final, labelKey, valueKey, ...obj };
  },
};
</script>
