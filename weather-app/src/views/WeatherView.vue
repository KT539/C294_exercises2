<template>
  <div>
    <h1>Météo d'une ville</h1>
    <p>Entrez une ville : </p>
    <input v-model="citySearch" @keyup.enter="search" placeholder="Entrez une ville..." />
    <button @click="search">Rechercher</button>

    <div v-if="weather" class="result">
      <h2>{{ weather.name }}</h2>
      <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" />
      <p>Température actuelle : {{ weather.main.temp }}°C</p>
      <p>Température minimum : {{ weather.main.temp_min }}°C</p>
      <p>Température maximum : {{ weather.main.temp_max }}°C</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeatherService from '@/services/WeatherService'

const citySearch = ref('')
const weather = ref(null)

const search = async () => {
  if (!citySearch.value) return
  try {
    const response = await WeatherService.getWeather(citySearch.value)
    weather.value = response.data
  } catch (err) {
    alert("Ville non trouvée");
    weather.value = null
  }
}
</script>
