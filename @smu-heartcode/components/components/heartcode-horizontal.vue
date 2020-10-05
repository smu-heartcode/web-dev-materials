<template>
  <vue-horizontal-list :items="items" :options="options">
    <template v-slot:default="{item}">
      <div class="item">
        <h5>{{ item.title }}</h5>
        <p>{{ item.content }}</p>
      </div>
    </template>
  </vue-horizontal-list>
</template>

<script>
export default {
  data() {
    return {
      options: {
        list: {windowed: 1280, padding: 24},
        responsive: [
          {end: 640, size: 1},
          {start: 640, end: 768, size: 2},
          {start: 768, end: 1024, size: 3},
          {start: 1024, end: 1280, size: 4},
          {start: 1280, size: 5}
        ],
      },
      items: [
        {title: 'Item 0', content: 'Content item with description'},
        {title: 'Item 1', content: 'Content item with description'},
        {title: 'Item 2', content: 'Content item with description'},
        {title: 'Item 3', content: 'Content item with description'},
        {title: 'Item 4', content: 'Content item with description'},
        {title: 'Item 5', content: 'Content item with description'},
        {title: 'Item 6', content: 'Content item with description'},
      ]
    }
  }
}
</script>

<style scoped>
.item {
  background: #EEEEEE;
  border-radius: 4px;
  padding: 16px;
}
</style>
