<template>
  <div class="root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HeartcodeBetween',
}
</script>

<style scoped>
.root {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
