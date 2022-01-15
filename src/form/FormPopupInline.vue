<template>
  <q-popup-proxy
    :value="isVisible"
    no-parent-event
    class="align-right"
    @input="cancel"
  >
    <q-banner>
      <form-inline :status="status" @submit="save" @reset="cancel">
        <slot />
        <!-- <field-builder
          class="w-64 align-middle"
          v-bind="data"
          :inputs="fields"
        /> -->
      </form-inline>
    </q-banner>
  </q-popup-proxy>
</template>
<script>
// import { inject, watch } from "vue";
export default {
  name: "FormPopupInline",
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    isVisible: {
      type: [String, Boolean],
      default: null,
    },
    status: {
      type: [String, Boolean],
      default: null,
    },
    // target: {
    //   type: [String, Boolean],
    //   default: true,
    // },
  },
  emits: ["saved", "cancelled", "close"],
  setup(props, context) {
    // watch(
    //   () => props.isVisible,
    //   (value) => (value ? show() : hide()),
    //   {
    //     immediate: true,
    //   }
    // );

    const save = () => {
      context.emit("saved", true);
    };

    const cancel = () => {
      context.emit("cancelled", true);
    };

    const close = () => {
      context.emit("close", true);
      // hide();
    };

    return {
      save,
      cancel,
      // visible,
      close,
    };
  },
};
</script>
