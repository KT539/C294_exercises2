<template>
  <div class="home-view">
    <div class="nav-links">
      <router-link to="/">Événements</router-link>
      <span> | </span>
      <router-link to="/about">À propos</router-link>
    </div>
    <EventCard v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
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

.nav-links {
  margin-bottom: 25px;
  font-size: 1.2em;
}

.nav-links a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links a.router-link-active {
  color: #0000ee;
}
</style>
