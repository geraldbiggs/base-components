<template>
  <div>
    <slot />
  </div>
</template>
<script>
import { inject } from "vue";
// import { useForm } from "vee-validate";
export default {
  name: "ValidationHandler",
  props: {
    initialValues: {
      type: null,
      default: null,
    },
    link: {
      type: String,
      default: "default",
    },
    validationSchema: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["update", "insert", "submit", "completed", "reset"],
  setup(props, context) {
    // const registerSchema = inject(props.link + "_registerSchema");

    // let form = useForm({
    //   initialValues: props.initialValues,
    //   validationSchema: props.validationSchema,
    // });

    // registerSchema(form);

    const save = () => {
      if (props.status === "editing") {
        context.emit("update");
      } else {
        context.emit("insert");
      }
      context.emit("submit", true);
      context.emit("completed", true);
    };

    const cancel = () => {
      context.emit("reset", true);
      context.emit("completed", true);
    };

    return {
      save,
      cancel,
    };
  },
};
</script>
