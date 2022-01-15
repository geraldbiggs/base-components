<template>
  <base-sidebar-right :is-visible="status" @close="sendClose">
    <base-form
      :is-editing="status"
      @insert="$emit('insert')"
      @update="$emit('update')"
      @submit="sendSubmit"
      @reset="sendCancel"
      @completed="sendComplete"
    >
      <slot />
    </base-form>
  </base-sidebar-right>
</template>
<script>
// import { watch } from "vue";
export default {
  name: "BaseSidebarForm",
  props: {
    status: {
      type: [String, Boolean],
      default: null,
    },
  },
  emits: ["insert", "update", "completed", "cancel", "close", "submit"],
  setup(props, context) {
    const sendComplete = () => {
      context.emit("completed");
    };

    // watch(
    //   () => props.status,
    //   (value) => {
    //     if (value === "success") sendComplete();
    //   }
    // );
    return {
      sendClose: () => {
        context.emit("cancel");
        context.emit("close");
      },
      sendCancel: () => {
        context.emit("cancel");
        context.emit("close");
      },
      sendComplete,
      sendSubmit: () => {
        context.emit("submit");
      },
    };
  },
};
</script>
