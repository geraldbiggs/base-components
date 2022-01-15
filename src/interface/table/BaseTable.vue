<template>
  <q-table v-bind="$attrs" :columns="columns" :data="data">
    <!-- Automatic -->
    <template
      v-for="slot in Object.keys($slots)"
      #[slot]="scope"
      
    >
      <slot :name="slot" v-bind="scope" />
    </template>
  </q-table>
</template>
<script>
export default {
  name: "BaseTable",
  inheritAttrs: false,
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // columns: coverageFields,
    };
  },
};
</script>
