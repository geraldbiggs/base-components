<template>
  <q-scroll-area class="fit">
    <q-list padding class="menu-list">
      <q-item v-for="link in links" :key="link.name" v-ripple :to="link.to">
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>

        <q-item-section>link.label</q-item-section>

        <q-separator v-if="link.separator" />
      </q-item>
    </q-list>
  </q-scroll-area>
</template>
<script>
export default {
  name: "NavigationSidebarLeft",
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
