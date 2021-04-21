<template>
<div>
  <v-row>
    <v-col cols="12" lg="12">
      <h1>Buildings</h1>
    </v-col>
    <v-col cols="12" lg="12">
      <v-btn @click="showBuildingDialog()">Add Building</v-btn>
    </v-col>
  </v-row>
  <v-row>

    <!-- Data Table -->
      <v-data-table
          dense
          :headers="headers"
          :items="desserts"
          item-key="name"
          class="elevation-1"
      ></v-data-table>

  </v-row>

  <v-dialog
      v-model="buildingDialog"
      max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        Use Google's location service?
      </v-card-title>

      <v-card-text>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            color="green darken-1"
            text
            @click="hideBuildingDialog()"
        >
          Disagree
        </v-btn>

        <v-btn
            color="green darken-1"
            text
            @click="hideBuildingDialog()"
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import Buildings from "../collections/Buildings";

export default {
  name: "Building",
  data(){
    return {
      buildingDialog: false
    }
  },
  meteor: {
    $subscribe:{

    },
    buildingList(){
      console.log("Buildings", Buildings.find().fetch())
      return Buildings.find().fetch()
    }
  },
  methods:{
    showBuildingDialog(){
      this.buildingDialog = true
    },
    hideBuildingDialog() {
      this.buildingDialog = false
    }
  }
}
</script>

<style scoped>

</style>
