<script>
import Vue from 'vue';
import { ComponentsLibSample } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    ComponentsLibSample,
  }
});
</script>

<template>
  <div id="app">
    <components-lib-sample />
  </div>
</template>
