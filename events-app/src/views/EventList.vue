<template>
  <div class="home-view">
    <div v-if="isLoading">Chargement...</div>
    <div v-else>
      <EventCard
        v-for="event in events"
        :key="event.id"
        :event="event"
        @delete="handleDelete"
        @edit="handleEdit"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService'

const events = ref([])
const isLoading = ref(false)
const router = useRouter()

const loadEvents = async () => {
  isLoading.value = true
  try {
    const response = await EventService.getEvents()
    events.value = response.data
  } finally {
    isLoading.value = false
  }
}

onMounted(loadEvents)

const handleDelete = async (id) => {
  if (confirm("Supprimer cet événement ?")) {
    await EventService.deleteEvent(id)
    await loadEvents() // reload after a delete
  }
}

const handleEdit = (event) => {
  router.push({ name: 'EventFormModif', params: { id: event.id } })
}
</script>

<style scoped>
.home-view { display: flex; flex-direction: column; align-items: center; }

</style>
