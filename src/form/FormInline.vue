<template>
  <base-form
    :actions="false"
    :status="status"
    @update="$emit('update')"
    @insert="$emit('insert')"
    @submit="$emit('submit')"
    @reset="$emit('cancel')"
    @completed="$emit('completed')"
  >
    <template #default="{ save, cancel }">
      <slot />
      <q-btn flat class="ml-auto align-middle" icon="check" @click="save" />
      <q-btn flat class="ml-auto align-middle" icon="cancel" @click="cancel" />
    </template>
  </base-form>
</template>
<script>
import { watch } from "vue";
export default {
  name: "FormInline",
  props: {
    status: {
      type: [String, Boolean],
      default: null,
    },
  },
  emits: ["update", "completed", "insert", "submit", "cancel"],
  setup(props, context) {
    const sendComplete = () => {
      context.emit("completed");
    };

    watch(
      () => props.status,
      (value) => {
        if (value === "success") sendComplete();
      }
    );
    return {};
  },
};
</script>
