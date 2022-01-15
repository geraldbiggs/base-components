<template>
  <q-popup-proxy
    :model-value="!!isVisible"
    no-parent-event
    class="align-right"
    @hide="$emit('close')"
  >
    <q-banner>
      <slot />
    </q-banner>
  </q-popup-proxy>
</template>
<script>
// import { inject, watch, computed } from "vue";
export default {
  name: "FormPopup",
  props: {
    isVisible: {
      type: [String, Boolean],
      default: true,
    },
  },
  emits: ["close"],
  setup() {},
};
</script>
