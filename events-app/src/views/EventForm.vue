<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-md-6 border p-4 rounded shadow-sm">
        <h2 class="text-center mb-4">{{ id ? 'Modifier' : 'Ajouter' }} un événement</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label class="form-label">Titre</label>
            <input v-model="event.title" type="text" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Catégorie</label>
            <select v-model="event.category" class="form-select" required>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea v-model="event.description" class="form-control" rows="3"></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Lieu</label>
            <input v-model="event.location" type="text" class="form-control" />
          </div>

          <div class="mb-3">
            <label class="form-label">Date</label>
            <input v-model="event.date" type="date" class="form-control" required />
          </div>

          <div class="mb-3">
            <label class="form-label">Heure</label>
            <input v-model="event.time" type="time" class="form-control" required />
          </div>

          <div class="d-flex justify-content-between mt-4">
            <button type="submit" class="btn btn-primary px-4">
              {{ id ? 'Modifier' : 'Ajouter' }}
            </button>
            <button type="button" class="btn btn-secondary px-4" @click="$router.push('/')">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import EventService from '@/services/EventService'

const props = defineProps({
  id: { type: String, required: false }
})

const router = useRouter()
const categories = ['Promotion', 'Loisirs', 'Découverte du monde professionnel', 'Stage', 'Remise des diplômes']

const event = ref({
  title: '',
  category: '',
  description: '',
  location: '',
  date: '',
  time: ''
})

onMounted(async () => {
  if (props.id) {
    try {
      const response = await EventService.getEvent(props.id)
      event.value = response.data
    } catch (error) {
      console.error("Erreur lors de la récupération :", error)
    }
  }
})

const handleSubmit = async () => {
  try {
    if (props.id) {
      await EventService.putEvent(event.value)
    } else {
      await EventService.postEvent(event.value)
    }
    router.push('/')
  } catch (error) {
    alert("Erreur lors de l'enregistrement.")
  }
}
</script>
