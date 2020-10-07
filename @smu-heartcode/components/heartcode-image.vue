<template>
  <div>
    <img :src="src">

    <div class="overlay">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String
  }
}
</script>

<style scoped>
div {
  position: relative;
  overflow: hidden;
}

img {
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
