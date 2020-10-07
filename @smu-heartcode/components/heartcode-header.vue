<template>
  <div class="header">
    <heartcode-container>
      <slot></slot>
    </heartcode-container>
  </div>
</template>

<style scoped>
.header {
  background: #EEEEEE;
  padding-top: 12px;
  padding-bottom: 12px;

  position: sticky;
  top: 0;
  z-index: 100000;
}
</style>
