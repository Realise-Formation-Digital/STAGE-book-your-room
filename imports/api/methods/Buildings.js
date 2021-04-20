import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Building from '../collections/Buildings.js';
import Rooms from "../collections/Rooms";

Meteor.methods({

    /**
     * Insert a building to the database
     * @param {String} building_name - the building's name
     * @param {String} building_adress - the building's adress
     * @returns  
     */
    'insert_building' (building_name, building_adress) {
        check(building_name, String);
        check(building_adress, String);

        return Building.insert({
            'Building_Name': building_name,
            'Building_Adress': building_adress,
        });

    },

    /**
     * Edit a building in the database
     * @param {String} id_building - the building's ID
     * @param {String} building_name - the building's name
     * @param {String} building_adress - the building's adress
     * @returns 
     */
    'edit_building' (id_building, building_name, building_adress) {
        check(id_building, String);
        check(building_name, String);
        check(building_adress, String);

        return Building.update({'_id': id_building}, {
            'Building_Name': building_name,
            'Building_Adress': building_adress,
        });

    },

     /**
     * Delete a building in the database
     * @param {_id} id_building - the building's id
     * @returns 
     */
    'delete_building' (id_building) {
        check(id_building, String);

        Rooms.remove({'idBuilding': id_building})

        return Building.remove({
            '_id': id_building
        });
    },

})
