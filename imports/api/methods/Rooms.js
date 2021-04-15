import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Room from '../collections/Rooms.js';

Meteor.methods({

    /**
     * Insert one room into the database
     * @param {String} room_name - the name of the room
     * @param {String} id_building - the id of the building where the room is
     * @param {Number} room_floor - the floor where the room is
     * @param {String} room_equipement -  the accessories of the room
     * @returns 
     */
    'insert_room' (room_name, id_building, room_floor, room_equipement) {
        check(room_name, String);
        check(id_building, String);
        check(room_floor, Number);
        check(room_equipement, [String]);

        console.log("[Rooms][insert_room] Inserting rooms with params", room_name, id_building, room_floor, room_equipement)

        return Room.insert({
            'room_name': room_name,
            'idBuilding': id_building,
            'room_floor': room_floor,
            'room_equipment': room_equipement,
        });

    },

    /**
     * Edit one room into the database
     * @param {String} id_room - te id of the updated room
     * @param {String} room_name - the name of the room
     * @param {String} id_building - the id of the building where the room is
     * @param {Number} room_floor - the floor where the room is
     * @param {String} room_equipement -  the accessories of the room
     * @returns
     */
    'edit_room' (id_room, room_name, id_building, room_floor, room_equipement) {
        check(id_room, String);
        check(room_name, String);
        check(id_building, String);
        check(room_floor, Number);
        check(room_equipement, String);

        console.log("[Rooms][edit_room] Updating rooms with params", room_name, id_building, room_floor, room_equipement)

        return Room.update({'_id': id_room}, {
            'room_name': room_name,
            'room_equipement': room_equipement,
        });

    },

     /**
     * Edit one room into the database
     * @param {_id} id_room - the room id
     * @returns 
     */
    'delete_room' (id_room) {
        check(id_room, String);
        return Room.remove({
            '_id': id_room
        });
    },

})
