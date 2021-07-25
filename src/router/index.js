import { createRouter, createWebHistory  } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/graphics',
    name: 'Graphics',
    component: () => import('../views/Graphics.vue')
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
