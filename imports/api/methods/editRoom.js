import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

meteor.methods({
    'edit_room' (room_name, id_building, room_floor, room_equipement) {
        check(room_name, String);
        check(id_building, String);
        check(room_floor, Number);
        check(room_equipement, String);

        return Room.update({'_id': }, {
            'Room_Name': room_name,
            'Room_Equipement': room_equipement,
        });

    },
});