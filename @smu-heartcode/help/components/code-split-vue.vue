<template>
  <div>
    <div class="t-flex t-items-center">
      <h2>{{ title }}</h2>
      <div class="t-ml-4 t-flex">
        <div
          class="t-font-mono t-text-center t-text-gray-800 t-text-sm t-font-semibold t-mr-2 t-px-2 t-rounded t-py-1 t-bg-gray-300 t-leading-tight"
          v-for="tag in tags">
          {{ tag }}
        </div>
      </div>
    </div>

    <div class="t-mt-2 t-rounded t-overflow-hidden t-border t-border-gray-300">
      <vuep :template="liveCode" :options="options"/>
    </div>
  </div>
</template>

<script>
import Vuep from '@smu-heartcode/vuep'

import stripIndent from "strip-indent";

export default {
  name: "code-split-vue",
  props: {
    title: {
      type: String
    },
    tags: {
      type: Array,
      default: []
    },
    code: {
      type: String
    },
  },
  components: {
    Vuep
  },
  data() {
    return {
      options: {
        scrollbarStyle: null
      },
      liveCode: stripIndent(this.code).trim()
    }
  },
}
</script>

<style>
</style>
