export const setUpdate = (name, context) => (value) => {
  // if (name) {
  //   context.emit("update:" + name, value);
  // }
  context.emit("update:currentData", value);
  // context.emit("input", value);
};

export const setProps = (props = {}) => {
  return {
    ...fieldProps,
    ...props,
  };
};

export const scaffoldField = (props, context) => {
  const { name, currentData, ...attrs } = context.attrs;

  // const { value } = useField(props.path);

  return {
    // value,
    attrs,
  };
};

export const fieldProps = {
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: null,
    default: null,
  },
};
