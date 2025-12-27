<template>
  <div class="weather-container">
    <h1>Météo Sainte-Croix</h1>
    <div v-if="weather">
      <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" />
      <p>Température actuelle : {{ weather.main.temp }}°C</p>
      <p>Température minimum : {{ weather.main.temp_min }}°C</p>
      <p>Température maximum : {{ weather.main.temp_max }}°C</p>
    </div>
    <p v-else>Chargement...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WeatherService from '@/services/WeatherService'

const weather = ref(null)

onMounted(async () => {
  try {
    const response = await WeatherService.getWeather('Sainte-Croix,CH')
    weather.value = response.data
  } catch (err) { console.error(err) }
})
</script>
