import axios from 'axios'

const apiClient = axios.create({
  baseURL:
    'https://api.openweathermap.org/data/2.5/weather?q=$%7bcity%7d&appid=$%7bapiKey%7d&units=metric&lang=fr',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
}
