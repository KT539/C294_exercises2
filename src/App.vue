<script setup>
import { ref } from 'vue'
import StudentForm from "./components/StudentForm.vue"
import StudentList from "./components/StudentList.vue"

const students = ref([])

function addStudent(student) {
  students.value.push(student)
}
</script>

<template>
  <div class="container mt-4">
    <StudentForm @student-added="addStudent" />
    <StudentList :students="students" />
  </div>
</template>