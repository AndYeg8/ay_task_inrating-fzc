import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import User from '../views/User.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('@/views/User.vue')
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
