<template>
<div>
  <v-row>
    <v-col cols="12" lg="12">
      <h1>Buildings</h1>
    </v-col>
    <v-col cols="12" lg="12">
      <v-btn @click="showBuildingDialog()">Add Building</v-btn>
    </v-col>
    <v-col cols="12" lg="12">
      <!-- Data Table -->
      <v-data-table
          dense
          :headers="headers"
          :items="buildingList"
          item-key="name"
          class="elevation-1"
      ></v-data-table>
    </v-col>
  </v-row>

  <v-dialog
      v-model="buildingDialog"
      max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        Insert building
      </v-card-title>

      <v-card-text>
        <v-text-field
            v-model="formBuilding.name"
            label="Name"
        ></v-text-field>
        <v-text-field
            v-model="formBuilding.address"
            label="Address"
        ></v-text-field>
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
            @click="saveBuilding()"
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
      buildingDialog: false,
      formBuilding:{
        name: null,
        address: null
      },
      headers: [
        {
          text: 'Building Name',
          align: 'start',
          sortable: false,
          value: 'Building_Name',
        },
        {
          text: 'Building Address',
          align: 'start',
          sortable: false,
          value: 'Building_Adress',
        },
      ],
    }
  },
  meteor: {
    $subscribe:{
      'buildings': []
    },
    buildingList(){
      console.log("Buildings", Buildings.find().fetch())
      return Buildings.find().fetch()
    }
  },
  methods:{
    saveBuilding() {
      Meteor.call('insert_building', this.formBuilding.name, this.formBuilding.address)
      this.hideBuildingDialog() // cache building dialog
    },
    showBuildingDialog(){
      this.buildingDialog = true
    },
    hideBuildingDialog() {
      this.formBuilding = {
        name: null,
        address: null
      }
      this.buildingDialog = false
    }
  }
}
</script>

<style scoped>

</style>
