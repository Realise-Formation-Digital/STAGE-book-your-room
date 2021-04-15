// Import the router
import {Meteor} from "meteor/meteor";

import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from "../components/Hello";
import Buildings from '../components/Buildings'
import Rooms from '../components/Rooms'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Hello,
  },
  {
    path: '/buildings',
    name: 'buildings',
    component: Buildings,
  }, {
    path: '/rooms',
    name: 'rooms',
    component: Rooms,
  },
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})
