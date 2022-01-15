export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    classes: {
      type: String,
      default: null,
    },
    value: {
      type: null,
      default: null,
    },
  },
  inheritAttrs: false,
  methods: {
    stripAttrs(attrs) {
      const { rules, ...final } = attrs;
      return final;
    },
    stripListeners(listeners) {
      const { ...final } = listeners;
      return final;
    },
    update(value) {
      if (this.name) {
        this.$emit("update:" + this.name, value);
        this.$emit("value-emit", (emit) => emit("update:" + this.name, value));
      }
      this.$emit("input", value);
    },
  },
};
