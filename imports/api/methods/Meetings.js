import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Meetings from '../collections/Meetings.js';

Meteor.methods({

    /**
     * Method to insert a meeting
     * @param {string} meeting_subject | subject of the meeting
     * @param {number} session_start | when the meeting session begin
     * @param {number} session_finish | when the meeting session finish
     * @param {string} id_users | the id of the principal user
     * @param {Array} invited_users | the invited users (without account)
     * @param {number} book_for_date | the date when the meeting was booked
     * @param {number} book_at_date | the date when the meeting is suppose to happen
     * @param {string} id_room | the id of the room where the meeting will be
     * @returns 
     */
    'insert_meeting' (meeting_subject, session_start, session_finish, id_users, invited_users, book_for_date, book_at_date, id_room) {
        check(meeting_subject, String);
        check(session_start, Number);
        check(session_finish, Number);
        check(id_users, String);
        check(invited_users, Array);
        check(book_for_date, Number);
        check(book_at_date, Number);
        check(id_room, String);

        return Meeting.insert({
            meeting_subject,
            session_start,
            session_finish,
            id_users,
            invited_users,
            book_for_date,
            book_at_date,
            id_room
        });
    },

    /**
     * Method to edit/update a meeting
     * @param {string} meeting_subject | subject of the meeting
     * @param {number} session_start | when the meeting session begin
     * @param {number} session_finish | when the meeting session finish
     * @param {string} id_users | the id of the principal user
     * @param {Array} invited_users | the invited users (without account)
     * @param {number} book_for_date | the date when the meeting was booked
     * @param {number} book_at_date | the date when the meeting is suppose to happen
     * @param {string} id_room | the id of the room where the meeting will be
     * @returns 
     */
    'edit_meeting' (meeting_subject, session_start, session_finish, id_users, invited_users, book_for_date, book_at_date, id_room) {
        check(meeting_subject, String);
        check(session_start, Number);
        check(session_finish, Number);
        check(id_users, String);
        check(invited_users, Array);
        check(book_for_date, Number);
        check(book_at_date, Number);
        check(id_room, String);

        return Meeting.update({
            meeting_subject,
            session_start,
            session_finish,
            id_users,
            invited_users,
            book_for_date,
            book_at_date,
            id_room
        });
    },

    /**
     * Method to delete a meeting
     * @param {_id} id_meeting | id of the meeting
     * @returns 
     */
    'delete_meeting' (id_meeting) {
        check(id_meeting, String);
 

        return Meeting.remove({
            '_id': id_meeting
        });

    },

});