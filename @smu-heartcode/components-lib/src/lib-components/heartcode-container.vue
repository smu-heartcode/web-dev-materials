<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HeartcodeContainer',
}
</script>

<style scoped>
.container {
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;

  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>
