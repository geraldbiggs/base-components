import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  resolve: {
    alias: {
      utils: "./src/utils/",
    },
  },
  build: {
    lib: {
      entry: "src/index.js",
    },
    external: ["vue", "vuex", "vue-router"],
    minify: "eslint",
  },
};
