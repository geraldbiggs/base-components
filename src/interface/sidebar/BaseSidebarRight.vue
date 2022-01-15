<template>
  <q-dialog
    :model-value="!!isVisible"
    v-bind="$attrs"
    :maximized="$q.platform.is.mobile ? maximizedToggle : false"
    :full-height="fullHeight"
    :position="position"
    @update:model-value="close"
    @hide="close"
  >
    <q-card :style="width">
      <q-card-actions align="left">
        <base-button
          variant="outline-warning"
          size="md"
          color="indigo"
          icon="close"
          round
          @click="close"
        />
      </q-card-actions>
      <q-card-section>
        <slot :close="() => close" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script>
// import { watch } from "vue";
// import { toggler} from 'composition-utils';
export default {
  name: "BaseSidebarRight",
  inheritAttrs: false,
  props: {
    width: {
      type: String,
      default: "width: 400px; max-width: 80vw;",
    },
    isVisible: {
      type: [String, Boolean],
      default: null,
    },
    position: {
      type: String,
      default: "right",
    },
    fullHeight: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["close"],
  setup(props, context) {
    // const { show, hide, visible } = toggler();

    // watch(
    //   () => props.isVisible,
    //   (value) => (value ? show() : hide()),
    //   {
    //     immediate: true,
    //   }
    // );

    const close = () => {
      context.emit("close", true);
      // hide();
    };

    return {
      // visible,
      close,
    };
  },
};
</script>
