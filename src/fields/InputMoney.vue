<template>
  <q-input
    :model-value="formatted"
    :name="name"
    mask="#.##"
    fill-mask="0"
    reverse-fill-mask
    input-class="text-right"
    v-bind="$attrs"
    @update:modelValue="(v) => $emit('update:modelValue', v)"
  />
</template>
<script>
import { computed } from "vue";
import { setProps, scaffoldField } from "../utils/wrapField.js";
import * as currency from "currency.js";
// import { computed } from "vue";
// import useCurrencyInput from "vue-currency-input";

export default {
  name: "InputMoney",
  directives: {
    // currency: CurrencyDirective,
  },
  props: setProps(),
  emits: ["update:modelValue"],
  setup(props, context) {
    let { attrs, ...obj } = scaffoldField(props, context);

    const formatted = computed(() =>
      currency(props.modelValue, { symbol: "" }).format()
    );

    return { ...obj, formatted };
  },
};

// const {
//   inputRef,
//   formattedValue,
//   // setOptions, setValue
// } = useCurrencyInput({
//   valueAsInteger: false,
//   currency: "USD",
//   locale: "en",
//   // currency: { prefix: null },
//   distractionFree: {
//     hideCurrencySymbol: true,
//     hideNegligibleDecimalDigits: false,
//   },
// });
</script>
