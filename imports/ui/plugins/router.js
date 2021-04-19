// Import the router
import {Meteor} from "meteor/meteor";

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/Home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
  }
]

export default new VueRouter({
  mode: 'history',
  routes: routes
})
