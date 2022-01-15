<template>
  <!-- <div>test</div> -->
  <component :is="component" v-bind="$attrs" />
</template>
<script>
export default {
  name: "Field",
  props: {
    type: {
      type: String,
      default: "text",
    },
  },
  setup(props) {
    let component = "InputText";

    if (props.type === "number") component = "InputNumber";
    if (props.type === "textarea") component = "TextArea";
    if (props.type === "date") component = "InputDate";
    if (props.type === "time") component = "InputTime";
    if (props.type === "text") component = "InputText";
    if (props.type === "money") component = "InputMoney";

    return { component };
  },
};
</script>
