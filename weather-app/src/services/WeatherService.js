import axios from 'axios'

const apiKey = '0f78ccfd064b434fcd9f8a63c45f778a'
const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export default {
  getWeather(city) {
    // units=metric
    return apiClient.get(`/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`)
  }
}
