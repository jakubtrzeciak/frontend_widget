import { createRouter, createWebHashHistory } from 'vue-router'
import Player from '../views/Player.vue'

const routes = [
  {
    path: '/',
    name: 'Player',
    component: Player
  }
  // component: function () {
  // return import(/* webpackChunkName: "about" */ '../views/Playlist.vue')
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
