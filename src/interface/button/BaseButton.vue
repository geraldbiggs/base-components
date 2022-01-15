<template>
  <q-btn v-bind="$attrs">
    <slot />
  </q-btn>
</template>
<script>
import {defineComponent} from 'vue';
export default defineComponent({
  name: "BaseButton",
});
</script>
