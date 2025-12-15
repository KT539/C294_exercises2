<template>
  <div class="home-view">
    <div class="nav-links">
      <router-link to="/">Météo Sainte-Croix</router-link>
      <span> | </span>
      <router-link to="/">Météo</router-link>
      <span> | </span>
      <router-link to="/about">À propos</router-link>
    </div>
    <div v-if="isLoading">
      <p>Chargement de la météo en cours</p>
    </div>
    <div v-else-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <WeatherCard v-for="event in events" v-bind:key="event.id" v-bind:event="event" />
    </div>
  </div>
</template>

<script setup>
import WeatherCard from '@/components/WeatherCard.vue'
import WeatherService from '@/services/WeatherService'
import { ref, onMounted } from 'vue'

const events = ref([])
const isLoading = ref(false)
const error = ref(null)

onMounted(async () => {
  isLoading.value = true
  error.value = null

  try {
    const response = await WeatherService.getEvents()
    events.value = response.data
  } catch (err) {
    console.error(err)
    error.value = 'Impossible de charger la météo en cours.'
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
