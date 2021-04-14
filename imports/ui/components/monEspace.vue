<template>
  <div>
    <v-main>
    <HeaderKilian/>
    <carrosel/>
    <sideBar/>
    HELLOO


    
    </v-main>



    


<calendrier/>

    <footerKilian/>
  </div>
</template>

<script>
import sideBar from './sideBar.vue'
import calendrier from './calendrier.vue'
import Carrosel from './carrosel.vue'
import footerKilian from './FooterKilian.vue'
import HeaderKilian from './HeaderKilian.vue'


export default {
  components: { footerKilian, HeaderKilian, Carrosel, sideBar, calendrier },
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
