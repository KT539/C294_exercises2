<template>
  <div class="home-view">
    <div class="nav-links">
      <router-link to="/">Événements</router-link>
      <span> | </span>
      <router-link to="/about">À propos</router-link>
    </div>
    <div v-if="isLoading">
      <p>Chargement des événements en cours</p>
    </div>
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <EventCard v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
    </div>
  </div>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'
import { ref, onMounted } from 'vue'

const events = ref([])
const isLoading = ref(false)
const error = ref(null)

onMounted(async () => {
  isLoading.value = true
  error.value = null

  try {
    const response = await EventService.getEvents()
    events.value = response.data
  } catch (err) {
    console.error(err)
    error.value = 'Impossible de charger les événements.'
  } finally {
    isLoading.value = false
  }
})
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

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 20px;
}
</style>
