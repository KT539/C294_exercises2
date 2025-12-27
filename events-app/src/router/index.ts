import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import EventForm from '@/views/EventForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'event-list', component: EventList },
    { path: '/about', name: 'about', component: About },
    { path: '/event/create', name: 'event-create', component: EventForm },
    {
      path: '/event/:id',
      name: 'EventFormModif',
      component: EventForm,
      props: true
    },
  ],
})

export default router
