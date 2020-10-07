import Vue from 'vue'
import VueRouter from 'vue-router'
import FilterGender from '../views/FilterGender.vue'
import FilterAge from '../views/FilterAge.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FilterGender',
    component: FilterGender,
  },
  {
    path: '/filter-age',
    name: 'FilterAge',
    component: FilterAge,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
