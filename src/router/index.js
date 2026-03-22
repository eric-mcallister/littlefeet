import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VolunteerGiveView from '@/views/VolunteerGiveView.vue'
import ContactView from '@/views/ContactView.vue'
import MonthlyMenuView from '@/views/MonthlyMenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  },
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
