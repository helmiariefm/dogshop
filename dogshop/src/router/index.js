import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Breeds from '../views/Breeds.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/breeds',
      name: 'breeds',
      component: Breeds
    }
  ]
})

export default router
