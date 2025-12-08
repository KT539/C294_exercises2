<script setup>
defineProps({
  students: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div v-if="students.length">
    <h3 class="mb-3">Students List</h3>

    <div class="row">
      <div class="col-md-4 mb-3" v-for="(student, index) in students" :key="index">
        <div class="card p-3 h-100">
          <h5>{{ student.firstName }} {{ student.lastName }}</h5>
          <p><strong>Description:</strong> {{ student.description }}</p>
          <p><strong>Gender:</strong> {{ student.gender }}</p>
          <p><strong>Interests:</strong> {{ student.interests.join(', ') }}</p>
          <p><strong>Birthdate:</strong> {{ student.birthDate }}</p>
          <p><strong>Motivation:</strong> {{ student.emoji }}</p>
        </div>
      </div>
    </div>
  </div>

  <p v-else>No list yet.</p>
</template>