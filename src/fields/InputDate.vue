<template>
  <!-- <div style="max-width: 300px"> -->
  <q-input
    :name="name"
    stack-label
    :label="label"
    :model-value="modelValue"
    mask="date"
    :rules="['date']"
    @update:modelValue="(v) => $emit('update:modelValue', v)"
  >
    <template #append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            :model-value="modelValue"
            @update:modelValue="(v) => $emit('update:modelValue', v)"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
  <!-- </div> -->
  <!-- <q-input
    :name="name"
    v-bind="attrs"
    mask="date"
    :modelValue="modelValue"
    @update:modelValue="update"
  > -->
  <!-- <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            :value="value"
            v-on="listeners"
            @input="() => $refs.qDateProxy.hide()"
          />
        </q-popup-proxy> -->
  <!-- </q-icon> -->
  <!-- </template> -->
  <!-- </q-input> -->
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "InputDate",
  props: setProps({ label: { type: String, default: null } }),
  emits: ["update:modelValue"],
  setup(props, context) {
    let obj = scaffoldField(props, context);

    return obj;
  },
};
</script>
