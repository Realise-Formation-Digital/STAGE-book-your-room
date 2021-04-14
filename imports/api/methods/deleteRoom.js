import meteor from 'meteor/meteor';

meteor.methods({
    'delete_room' (id_room) {
        check(id_room, String);
 

        return Room.remove({
            '_id': id_room
        });

    },
});