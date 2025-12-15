<template>
  <div class="home-view">
    <h1>Upcoming Events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'
const events = ref([
  {
    id: 1,
    time: '18:00',
    date: '2025-12-10',
    title: 'Soirée jeux de société',
  },
  {
    id: 2,
    time: '14:30',
    date: '20205-12-15',
    title: 'Atelier Vue 3',
  },
  {
    id: 3,
    time: '09:00',
    date: '2025-12-20',
    title: 'Petit-déjeuner en classe',
  },
])
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
