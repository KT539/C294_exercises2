<template>
  <div class="weather-card">
    <span>{{ event.date }} à {{ event.time }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<!-- scoped parameter: the css will apply to elements of the current component only -->
<style scoped>
.weather-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: center;
}
</style>
