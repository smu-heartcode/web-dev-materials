<template>
  <div class="t-m-0">
    <nav-header/>

    <div class="t-container t-mx-auto t-px-4 t-py-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NavHeader from "./nav-header";

export default {
  name: "help-container",
  components: {NavHeader}
}
</script>

<style scoped>

</style>
