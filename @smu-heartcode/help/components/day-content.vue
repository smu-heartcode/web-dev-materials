<template>
  <help-container class="t-pb-24">
    <template v-for="(section, index) in sections">
      <hr v-if="index !== 0" class="t-mb-8">

      <div>
        <h1 class="t-border-b t-pb-2 t-mb-8">{{ section.topic }}</h1>

        <code-split-html class="t-mb-10" v-for="item in section.list" v-bind="item" :key="item.title"/>
      </div>
    </template>
  </help-container>
</template>

<script>
import HelpContainer from "./help-container";
import CodeSplitHtml from "./code-split-html";
import contents from '../contents'

export default {
  name: 'day-content',
  props: {
    day: String,
  },
  data() {
    return {
      sections: contents[this.day].sections
    }
  },
  components: {
    CodeSplitHtml,
    HelpContainer,
  }
}
</script>
