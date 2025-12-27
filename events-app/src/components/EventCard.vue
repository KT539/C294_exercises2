<template>
  <div class="event-card">
    <span>{{ event.date }} à {{ event.time }}</span>
    <h4>{{ event.title }}</h4>
    <div class="btn-group mt-2">
      <button class="btn btn-sm btn-outline-primary" @click="$emit('edit', event)">Modifier</button>
      <button class="btn btn-sm btn-outline-danger" @click="$emit('delete', event.id)">Supprimer</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: { type: Object, required: true }
})
defineEmits(['delete', 'edit'])
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2);
}
</style>
