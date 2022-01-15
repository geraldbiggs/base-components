<template>
  <div class="row">
    <div class="col">
      <slot name="header" />
    </div>
    <div class="col">
      <slot name="action" />
    </div>
  </div>
</template>
<script>
export default {
  name: "BaseTableHeader",
};
</script>
