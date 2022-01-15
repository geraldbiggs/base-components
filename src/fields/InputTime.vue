<template>
  <q-input
    :model-value="modelValue"
    filled
    mask="time"
    :rules="['time']"
    @update:modelValue="(v) => $emit('update:modelValue', v)"
  >
    <template #append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time
            :model-value="modelValue"
            @update:modelValue="(v) => $emit('update:modelValue', v)"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
<script>
import { setProps, scaffoldField } from "../utils/wrapField.js";
export default {
  name: "InputTime",
  props: setProps(),
  emits: ["update:modelValue"],
  setup(props, context) {
    let obj = scaffoldField(props, context);
    return obj;
  },
};
</script>
