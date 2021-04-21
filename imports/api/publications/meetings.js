import { Meteor } from 'meteor/meteor';
import Meetings from "../collections/Meetings";

Meteor.publish('meetings', function () {
    return Meetings.find();
});
