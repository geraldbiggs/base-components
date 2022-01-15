<template>
  <q-btn-dropdown label="hi">
    <q-list>
      <q-item v-close-popup>
        <q-item-section>
          <q-item-label>Photos</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>
<script>
// <!-- <slot name="before" />
// <slot name="manual" />
// <q-item
//   v-for="(option, key) in options"
//   :key="key"
//   clickable
//   @click="select(option.id)"
// >
//   <q-item-section>
//     <q-item-label>
//       <slot name="label" :option="option">{{ option[useKey] }} </slot>
//     </q-item-label>
//   </q-item-section>
// </q-item>
// <slot name="after" /> -->
export default {
  name: "DropdownButton",
  props: {
    useKey: {
      type: String,
      default: "name",
    },
    disabled: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: "Select",
    },
    optionLabel: {
      type: null,
      default: "name",
    },
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["selected"],
  setup(props, context) {
    return {
      select: (id) => {
        context.emit("selected", id);
      },
    };
  },
};
</script>
