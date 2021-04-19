<template>
  <v-app id="inspire">
    <v-main>
      <HeaderKilian/>
      <v-container
          fluid>
          <router-view/>
      </v-container>
      <FooterKilian/>
    </v-main>
  </v-app>
</template>

<script>
import HeaderKilian from './layout/Headerbar.vue'
import FooterKilian from './layout/Footerbar.vue'

export default {
  components: { HeaderKilian, FooterKilian }
}
</script>

<style>

</style>
