<template>
  <base-button color="primary" size="sm" round icon="edit" />
</template>
<script>
export default {
  name: "ButtonEdit",
  props: {
    label: {
      type: String,
      default: null,
    },
  },
};
</script>
