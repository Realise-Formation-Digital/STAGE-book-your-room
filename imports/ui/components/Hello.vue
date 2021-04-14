<template>
  <div>
    <v-main>
    <HeaderKilian/>
    <carrosel/>
    
    HELLOO

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


    
    </v-main>



    
    <footerKilian/>
  </div>
</template>

<script>

import Carrosel from './carrosel.vue'
import footerKilian from './FooterKilian.vue'
import HeaderKilian from './HeaderKilian.vue'


export default {
  components: { footerKilian, HeaderKilian, Carrosel, },
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