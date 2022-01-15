<template>
  <q-card v-bind="cleanedAttrs">
    <template v-if="title">
      <q-card-section>
        <div class="text-h5">{{ title }}</div>
      </q-card-section>
    </template>
    <slot name="title" />
    <slot />
    <slot name="actions" />
  </q-card>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: null
    },
  },
  setup(props, context) {
    const {title, ...cleanedAttrs} = context.attrs;
    return {
      cleanedAttrs      
    }
  }
};
</script>
