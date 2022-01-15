<template>
  <component
    :is="component"
    v-show="!field.fieldAttrs.visible"
    :label="field.fieldAttrs.label"
    :model-value="modelValue"
    :name="field.name"
    :field="field"
    v-bind="$attrs"
    @focus="(v) => $emit('focus')"
    @update:model-value="(v) => $emit('update:model-value', v)"
  />
</template>
<script>
import { useInput } from "../utils/useInput";
import { useSelection } from "../utils/useSelection";
export default {
  name: "BaseField",
  inheritAttrs: false,
  props: {
    field: {
      type: Object,
      required: true,
    },
    model: {
      type: String,
      default: null,
    },
    modelValue: {
      type: null,
      default: null,
    },
  },
  emits: [
    "focus",
    "update-field",
    "updated-object",
    "input",
    "update:model-value",
  ],
  setup(props, context) {
    let component =
      props.field.type === "custom"
        ? props.field.template
        : props.field.component === "field"
        ? useInput(props.field.type)
        : useSelection(props.field.type);

    const { resource, ...attrs } = context.attrs;
    return {
      component,
      attrs,
      // errors,
      // fields,
      // setFieldValue,
      // selectedInputs,
      // update,
      // values,
      // formSchema,
      // vFields
    };
  },
};
</script>
