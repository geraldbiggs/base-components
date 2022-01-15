<script>
// <template>
//   <component :is="component" v-bind="$attrs" />
// </template>
import { toRefs, resolveComponent, h } from "vue";
export default {
  name: "Selection",
  inheritAttrs: false,
  props: {
    multiple: {
      type: Boolean,
    },
    options: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: null,
    },
    unwrap: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { unwrap, type, multiple } = toRefs(props);
    let component = "dropdown";

    const isWrapped = (unwrap, component) => {
      if (component !== "select" || component !== "dropdown") return false;
      return (
        unwrap.value !== true &&
        component !== "select" &&
        component !== "dropdown" &&
        component !== "yes-no-buttons" &&
        component !== "checkbox"
      );
    };

    if (type.value === "radioGroup") component = "radio-group";
    if (type.value === "select") component = "select";
    if (type.value === "buttonToggle") component = "button-toggle";
    if (type.value === "yesNo") component = "yes-no-buttons";
    if (type.value === "checkboxGroup") component = "checkbox-group";
    if (type.value === "dropdown") component = "dropdown";
    if (type.value === "checkbox") component = "checkbox";

    const input = resolveComponent(component);

    return () =>
      isWrapped(unwrap, input)
        ? h(resolveComponent("vertical-field"), context.attrs, {
            default: () => h(input, { ...context.attrs, ...props }),
          })
        : h(input, { ...context.attrs, ...props });
  },
};
</script>
