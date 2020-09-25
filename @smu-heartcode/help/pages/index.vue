<template>
  <help-container>
    <h1>Daily Agenda</h1>
    <n-link to="/help/day1">
      <h3>Day 1</h3>
    </n-link>
    <n-link to="/help/day2">
      <h3>Day 2</h3>
    </n-link>
    <n-link to="/help/day3">
      <h3>Day 3</h3>
    </n-link>
    <n-link to="/help/day4">
      <h3>Day 4</h3>
    </n-link>
  </help-container>
</template>

<script>
import HelpContainer from "../components/help-container";

export default {
  components: {HelpContainer}
}
</script>

<style scoped>

</style>
