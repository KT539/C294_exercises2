import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/components/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
