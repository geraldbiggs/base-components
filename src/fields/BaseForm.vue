<template>
  <q-form v-bind="$attrs">
    <slot :save="() => save()" :cancel="() => cancel()" />
    <template v-if="actions">
      <slot name="cancelButton" :cancel="cancel">
        <base-button color="secondary" label="Cancel" @click="cancel" />
      </slot>
      <slot name="saveButton" :save="() => save">
        <base-button color="primary" :label="labelSave" @click="save" />
      </slot>
    </template>
  </q-form>
</template>
<script>
export default {
  name: "BaseForm",
  props: {
    actions: {
      type: Boolean,
      default: true,
    },
    initialValues: {
      type: Object,
      default: () => {},
    },
    labelSave: {
      type: String,
      default: "Save",
    },
    link: {
      type: String,
      default: "default",
    },
    schema: {
      type: Object,
      default: () => {},
    },
    status: {
      type: [String, Boolean],
      default: null,
    },
    validationSchema: {
      type: Object,
      default: () => {
        empty: true;
      },
    },
  },
  emits: ["update", "insert", "submit", "completed", "reset"],
  setup(props, context) {
    const save = (values) => {
      context.emit("submit", values);
      context.emit("reset", true);
      context.emit("completed", true);
    };

    const cancel = () => {
      context.emit("reset", true);
      context.emit("completed", true);
    };

    return {
      errors: [],
      // form,
      save,
      cancel,
    };
  },
};
</script>
