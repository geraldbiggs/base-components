<template>
  <q-item clickable>
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      {{ label }}
      <slot />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "LeftMenuItem",
  props: {
    icon: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
  },
  // setup(props, context) {},
};
</script>
