<template>
  <div>
    <dropdown
      :name="name"
      :field="field"
      emit-value
      v-bind="attrs"
      :options="entries"
      :model-value="modelValue"
      @update:model-value="(v) => $emit('update:modelValue', v)"
    />
    <template v-if="custom">
      <slot name="custom" />
    </template>
  </div>
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ResourceSelect",
  props: setProps({
    field: {
      type: Object,
      default: () => {},
    },
    custom: {
      type: Boolean,
      default: false,
    },
    resource: {
      type: String,
      required: true,
    },
    additionalOptions: {
      type: Array,
      default: () => [],
    },
    optionMap: {
      type: Function,
      default: (x) => {
        return {
          label: x.name,
          value: x.id,
        };
      },
    },
  }),
  emits: ["update:modelValue"],
  setup(props, context) {
    let store = useStore();
    let { attrs, ...obj } = scaffoldField(props, context);
    let { optionMap, ...final } = attrs;

    const entries = computed(() => {
      let items = store
        .$db()
        .model(props.field.fieldAttrs.model)
        .query()
        .withAll()
        .get();

      let totalItems =
        props.additionalOptions.length === 0
          ? items
          : items.concat(props.additionalOptions);

      return totalItems;
    });

    return {
      attrs: final,
      entries,
      ...obj,
    };
  },
};
</script>
