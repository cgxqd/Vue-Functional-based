<template>
  <div id="app">
    <setup></setup>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    setup:()=>import('./components/setup.vue')
  }
}
</script>
