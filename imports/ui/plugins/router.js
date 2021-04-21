// Import the router
import {Meteor} from "meteor/meteor";

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Rooms from "../pages/Rooms";
import Buildings from "../pages/Buildings";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  {
    path: '/buildings',
    name: 'buildings',
    component: Buildings,
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: Rooms,
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUs,
  }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})
