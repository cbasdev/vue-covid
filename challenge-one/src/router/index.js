import Vue from 'vue'
import VueRouter from 'vue-router'
import FilterGender from '../views/FilterGender.vue'
import FilterAge from '../views/FilterAge.vue'
import FilterCity from '../views/FilterCity.vue'

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
    // component: () =>
    //   import(/* webpackChunkName: "about" */ '../views/FilterAge.vue'),
  },
  {
    path: '/filter-city',
    name: 'FilterCity',
    component: FilterCity,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
