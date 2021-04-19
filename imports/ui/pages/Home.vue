<template>
  <div>
      <carrosel/>
      HELLOO
      <br>
  </div>
</template>

<script>

import Carrosel from '../components/carrosel.vue'

export default {
  components: {Carrosel},
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.counter += 1
      //Meter.call('insertLink', 'LinkTitle', 'linkUrl', 1)
    }
  },
}
</script>

<style scoped>
p {
  font-family: serif;
}
</style>
