<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col></v-col>
        <v-col>
          <v-btn
              rounded
              color="primary"
              dark
              big
              @click="showInsertDialog()"
          >
            Add Room
          </v-btn>
          <v-text-field
              v-model="searchRooms"
              append-icon="mdi-magnify"
              label="Search Room"
              single-line
              hide-details
          ></v-text-field>
        </v-col>
        <!-- button add rooms and search in table-->
      </v-row>

      <v-row>
        <!-- Table -->
        <v-col cols="12">
          <v-data-table
              :headers="headers"
              :items="roomsList"
              :search="searchRooms"
          >

            <!-- Actions -->
            <template #item.actions="{ item }">
              <v-tooltip
                  top
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                      icon
                      color="orange"
                      v-on="on"
                      @click=""
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <span>Update {{ item.room_name }}</span>
              </v-tooltip>
              <v-tooltip
                  top
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                      icon
                      color="red"
                      v-on="on"
                      @click="selectRoom(item._id)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Delete {{ item.room_name }}</span>
              </v-tooltip>
            </template>

          </v-data-table>
        </v-col>
      </v-row>
    </v-col>

    <!-- Dialog to insert or update a single room -->
    <v-dialog
        v-model="showInsertRoomDialog"
        persistent
        max-width="800px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Room Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-text-field
                    v-model="roomData.roomName"
                    label="Room name"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <v-text-field
                    v-model="roomData.floor"
                    label="Room Floor"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    v-model="roomData.idBuilding"
                    :items="['id1', 'id2', 'id3', 'id4']"
                    label="Building Linked"
                    required
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    v-model="roomData.equipment"
                    :items="['beamer', 'chromecast', 'tv']"
                    label="Equipment"
                    multiple
                    chips
                    required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              :disabled="isInsertingRoom"
              text
              @click="hideInsertDialog()"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              :loading="isInsertingRoom"
              :disabled="isInsertingRoom"
              text
              @click="insertRoom()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog to delete a single room -->
    <v-dialog
        v-model="showDeleteRoomDialog"
        max-width="500"
    >
      <v-card>
        <v-card-title class="headline">
          Are you sure?
        </v-card-title>

        <v-card-text>
          Are you sure to delete the {{selectedRoom && selectedRoom.room_name}}?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="green darken-1"
              text
              :disabled="isDeletingRoom"
              @click="hideDeleteDialog()"
          >
            Disagree
          </v-btn>

          <v-btn
              color="green darken-1"
              text
              :loading="isDeletingRoom"
              :disabled="isDeletingRoom"
              @click="deleteRoom()"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Rooms from "../collections/Rooms";
import Buildings from "../collections/Buildings";
import {Meteor} from "meteor/meteor";

export default {
  name: "Rooms",
  meteor: {
    $subscribe: {
      'rooms': [], //Subscription to rooms pubblication
      'building': [] //subscription to building pubblication
    },
    roomsList() {
      console.log("Rooms list", Rooms.find().fetch())
      return Rooms.find().fetch()
    },
    buildingsList() {
      console.log("Buildings list", Buildings.find().fetch())
      return Buildings.find().fetch()
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Room Name',
          align: 'start',
          filterable: false,
          value: 'room_name',
        },
        {
          text: 'Floor',
          filterable: false,
          value: 'room_floor',
        },
        {
          text: 'Equipment',
          filterable: false,
          value: 'room_equipment',
        },
        {
          text: 'Actions',
          filterable: false,
          value: 'actions',
        }
      ],
      searchRooms: null,
      showInsertRoomDialog: false,
      showDeleteRoomDialog: false,
      roomData: {
        roomName: null,
        floor: null,
        equipment: null,
        idBuilding: null
      },
      isInsertingRoom: false, // Property for the loader ;)
      isDeletingRoom: false, // Property for the loader ;)
      selectedRoom: null
    }
  },
  methods: {

    //todo important we have to link to the right building when building is finished

    /**
     * insert a single room
     * */
    insertRoom() {
      this.isInsertingRoom = true

      Meteor.call('insert_room', this.roomData.roomName, this.roomData.idBuilding, parseInt(this.roomData.floor), this.roomData.equipment, (err, res) => {
        if (res) console.log("Good")
        else console.log("Bad")
      })

      this.isInsertingRoom = false
      this.hideInsertDialog()
    },

    /**
     * Update a single room
     * */
    updateRoom() {

      //todo we have to do the update process

    },

    /**
     * Delete a single room
     * */
    deleteRoom() {
      this.isDeletingRoom = true
      if (!this.selectedRoom) return //error case
      Meteor.call('delete_room', this.selectedRoom._id, (err, res) => {
        if (res) console.log("Good")
        else console.log("Bad")
      })
      this.isDeletingRoom = false
      this.hideDeleteDialog()
    },

    /**
     * Select a room and then open the delete dialog
     * */
    selectRoom(id){
      const foundRoom = this.roomsList.find((r) => r._id === id)
      if (!foundRoom) return // here probably we had an error
      this.selectedRoom = foundRoom
      this.showDeleteDialog()
    },

    /**
     * Show the dialog to insert a single room
     */
    showInsertDialog() {
      this.showInsertRoomDialog = true
    },

    /**
     * Hide the dialog to insert a single room
     */
    hideInsertDialog() {
      this.showInsertRoomDialog = false
      this.roomData = { // to reset the field to be able to insert or update another room
        roomName: null,
        floor: null,
        equipment: null,
        idBuilding: null
      }
    },

    /**
     * Show Delete dialog
     */
    showDeleteDialog() {
      this.showDeleteRoomDialog = true
    },

    /**
     * Hide Delete Dialog
     */
    hideDeleteDialog() {
      this.showDeleteRoomDialog = false
      this.selectedRoom = null
    }
  }
}
</script>

<style scoped>

</style>
