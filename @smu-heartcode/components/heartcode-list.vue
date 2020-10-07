<template>
  <section>
    <slot></slot>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
section {
  display: flex;
}

section > div {
  width: 20%;
}
</style>
