<template>
<div id="app">
  <v-app>
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
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template>
              <v-btn
                color="primary"
                dark
                class="mb-2"
                @click="showBuildingDialog()"
              >
                Add Building
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
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
                  @click="hideBuildingDialog()"
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
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
        <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-app>
</div>
</template>

<script>
import Buildings from "../collections/Buildings";

  export default {
      name: "Building",
    data() {
        return{
        buildingDialog: false,
        formBuilding:{
        name: null,
        address: null
      },    
        dialog: false,
        dialogDelete: false,

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
        }
    },
        
meteor:{
     $subscribe:{
                'buildings': [],
                editedItem: {
                name: '',
                adress: '',
            },
                defaultItem: {
                name: '',
                adress: '',
            },

        buildingList(){
        console.log("Buildings", Buildings.find().fetch())
        return Buildings.find().fetch()
        
        },
       
    },

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods: {
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
            },
            formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            },
            dialogDelete (val) {
            val || this.closeDelete()
            },
    },

      editItem (item) {
        this.editedIndex = this.buildings.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.buildings.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.buildings.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.buildings[this.editedIndex], this.editedItem)
        } else {
          this.buildings.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>

</style>