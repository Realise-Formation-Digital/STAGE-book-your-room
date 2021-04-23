<template>
  <div id="app">
    <v-app>

      <v-btn
          color="primary"
          dark
          class="mb-2"
          @click="showDialogInsert()"
      >
        Add Building
      </v-btn>

      <!-- Data Table -->
      <v-data-table
          :headers="headers"
          :items="buildingList"
          items-key="name"
          class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-toolbar-title>Buildings</v-toolbar-title>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="selectItemToUpdate(item._id)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="selectItemToDelete(item._id)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>

      <!-- Dialog Delete Building -->
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="hideDialogDelete()">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="hideDialogDelete()">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialog Update Building -->
      <v-dialog
          v-model="dialogUpdate"
          max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Update Building</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      v-model="formBuilding.name"
                      label="Name"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      v-model="formBuilding.address"
                      label="Adress"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="hideDialogUpdate()"
            >
              Cancel
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="hideDialogUpdate()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialog Insert Building -->
      <v-dialog
          v-model="dialogInsert"
          max-width="500px"
      >
        <v-card>
          <v-card-title>
            <span class="headline">Insert building</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      v-model="formBuilding.name"
                      label="Name"
                  ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                    md="4"
                >
                  <v-text-field
                      v-model="formBuilding.address"
                      label="Adress"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="blue darken-1"
                text
                @click="hideDialogInsert()"
            >
              Cancel
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                @click="saveBuilding()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>

<script>
import Buildings from "../collections/Buildings";

export default {
  name: "Building",
  data() {
    return {
      formBuilding: {
        name: null,
        address: null
      },
      dialog: false,
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
        {
          text: 'Actions',
          align: 'start',
          sortable: false,
          value: 'actions',
        },
      ],
      dialogInsert: false,
      dialogUpdate: false,
      dialogDelete: false
    }
  },

  meteor: {
    $subscribe: {
      'buildings': [],
    },
    buildingList() {
      console.log("Buildings", Buildings.find().fetch())
      return Buildings.find().fetch()

    },
  },

  methods: {

    //Methods for Dialog

    showDialogDelete(){
      this.dialogDelete = true
    },
    showDialogUpdate(){
      this.dialogUpdate = true
    },
    // First Step show dialog to insert building
    showDialogInsert(){
      this.dialogInsert = true
    },
    hideDialogDelete(){
      this.dialogDelete = false
      this.resetFormBuilding()
    },
    hideDialogUpdate(){
      this.dialogUpdate = false
      this.resetFormBuilding()
    },
    hideDialogInsert(){
      this.dialogInsert = false
      this.resetFormBuilding()
    },

    resetFormBuilding(){
      this.formBuilding = {
        name: null,
        address: null
      }
    },

    /**
     * First Step -->
     * Second Step -->
     * Third Step -->
     * Fourth Step -->
     * etc....
     */

    saveBuilding() {
      // Third Step send Data to server
      Meteor.call('insert_building', this.formBuilding.name, this.formBuilding.address)

      // Fourth Step hide dialog after insert building
      this.hideDialogInsert()
    },

    showBuildingDialog() {
      this.buildingDialog = true
    },

    hideBuildingDialog() {
      this.formBuilding = {
        name: null,
        address: null
      }
      this.buildingDialog = false
    },

    /*formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },*/

    selectItemToUpdate(id) {
      //first step --> search in the buildings list the building
      const buildingFound = this.buildingList.find((building) => building._id === id)
      if (!buildingFound) return //second step --> check if we found something
      this.formBuilding.name = buildingFound.Building_Name //third step --> show to the user
      this.formBuilding.address = buildingFound.Building_Adress //third step --> show to the user
      this.showDialogUpdate() //fourth step --> show the dialog
    },

    selectItemToDelete(id) {
      //first step --> search in the buildings list the building
      const buildingFound = this.buildingList.find((building) => building._id === id)
      if (!buildingFound) return //second step --> check if we found something
      this.editedItem = buildingFound //third step --> show to the user
      this.showDialogDelete() //fourth step --> show the dialog
    },

    /*close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.buildings[this.editedIndex], this.editedItem)
      } else {
        this.buildings.push(this.editedItem)
      }
      this.close()
    },*/
  },
}
</script>

<style scoped>

</style>
