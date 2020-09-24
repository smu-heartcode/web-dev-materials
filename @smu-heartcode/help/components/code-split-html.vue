<template>
  <div>
    <div class="t-flex t-items-center">
      <h2>{{ title }}</h2>
      <div class="t-ml-4 t-flex">
        <div class="t-font-mono t-text-center t-text-gray-800 t-text-sm t-font-semibold t-mr-2 t-px-2 t-rounded t-py-1 t-bg-gray-300 t-leading-tight" v-for="tag in tags">
          {{ tag }}
        </div>
      </div>
    </div>

    <div class="t-flex t-mt-2 t-rounded t-overflow-hidden t-border t-border-gray-300">
      <div class="t-w-1/2">
        <prism-editor class="code-editor" v-model="liveCode" :highlight="highlighter" line-numbers/>
      </div>

      <div class="t-w-1/2 t-py-3 t-px-6">
        <div v-html="liveCode"/>
      </div>
    </div>
  </div>
</template>

<script>
import {PrismEditor} from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";

import {highlight, languages} from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism-tomorrow.css";

export default {
  name: "code-split-html",
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
    PrismEditor
  },
  data() {
    return {
      liveCode: this.code.trim()
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.markup, 'html')
    }
  },
}
</script>

<style>
.code-editor {
  background: #2d2d2d;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;

  padding: 16px 2px;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
