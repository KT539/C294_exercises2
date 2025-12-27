import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WeatherView from '@/views/WeatherView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Sainte-Croix', name: 'sc-weather', component: HomeView },
    { path: '/weather', name: 'weather', component: WeatherView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/', redirect: '/Sainte-Croix' }
  ],
})

export default router
