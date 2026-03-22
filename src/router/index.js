import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VolunteerGiveView from '@/views/VolunteerGiveView.vue'
import ContactView from '@/views/ContactView.vue'
import MonthlyMenuView from '@/views/MonthlyMenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: VolunteerGiveView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MonthlyMenuView,
    },
  ],
})

export default router
