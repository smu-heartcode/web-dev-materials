<template>
  <help-container class="t-pb-24">
    <template v-for="(section, index) in sections">
      <hr v-if="index !== 0" class="t-mb-8">

      <div>
        <h1 class="t-border-b t-pb-2 t-mb-8">{{ section.topic }}</h1>

        <div class="t-mb-12" v-for="item in section.list" :key="item.title">
          <code-split-vue v-if="item.vue" v-bind="item"/>
          <code-split-html v-else v-bind="item"/>
        </div>
      </div>
    </template>
  </help-container>
</template>

<script>
import HelpContainer from "./help-container";
import CodeSplitHtml from "./code-split-html";
import contents from '../contents'
import CodeSplitVue from "@/@smu-heartcode/help/components/code-split-vue";

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
    CodeSplitVue,
    CodeSplitHtml,
    HelpContainer,
  }
}
</script>
