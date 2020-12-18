<template>
  <div class="header">
    <heartcode-container>
      <slot></slot>
    </heartcode-container>
  </div>
</template>

<script>
export default {
  name: 'HeartcodeHeader',
}
</script>

<style scoped>
.header {
  padding-top: 12px;
  padding-bottom: 12px;

  position: sticky;
  top: 0;
  z-index: 100000;
}
</style>
