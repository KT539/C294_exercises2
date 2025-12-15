import { createRouter, createWebHistory } from 'vue-router'
import Any_Weather from '@/views/WeatherView.vue'
import Home_Weather from '@/components/HomeView.vue'
import About from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'weather',
      component: Any_Weather,
    },
    {
      path: '/Sainte-Croix',
      name: 'sc-weather',
      component: Home_Weather,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
