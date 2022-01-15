<script>
import { h, resolveComponent } from "vue";
export default {
  name: "FieldBuilder",
  props: {
    fields: {
      type: Object,
      default: () => {},
    },
    form: {
      type: Object,
      default: () => {},
    },
    modelValue: {
      type: Object,
      default: () => {},
    },
    sub: { type: Boolean, default: false },
  },
  emits: ["update:model-value"],
  setup(props, context) {
    const BaseForm = resolveComponent("BaseForm");

    return () => {
      let children =
        typeof context.slots.default === "function"
          ? context.slots.default()
          : [];

      const setElement = (cur) => {
        if (typeof cur === "string") {
          return cur;
        }
        if (
          typeof cur === "object" &&
          cur.type &&
          cur.type.name === "BaseField"
        ) {
          let { resource, name, ...remaining } = cur.props;

          return h(cur, {
            modelValue: props.modelValue[resource][name],
            "onUpdate:modelValue": (value) => {
              context.emit("update:model-value", {
                ...props.modelValue,
                [resource]: {
                  ...props.modelValue[resource],
                  [name]: value,
                },
              });
            },
            field: resource
              ? props.fields[resource].fields[name]
              : props.fields.fields[name],
            name,
            ...remaining,
          });
        } else {
          return h(cur);
        }
      };

      const search = (tree) => {
        let result = Array.isArray(tree)
          ? tree.reduce((elements, current) => {
              if (typeof current === "string") return current;
              let element = search(setElement(current));
              let children = current.children ? search(current.children) : null;
              return elements.concat({ ...element, children: children });
            }, [])
          : typeof tree === "string"
          ? tree
          : {
              ...setElement(tree),
              children: tree.children ? search(tree.children) : null,
            };

        return result;
      };

      let formElements = search(children);

      return props.sub
        ? h("div", formElements)
        : h(BaseForm, {}, () => formElements);
    };
  },
};
</script>
