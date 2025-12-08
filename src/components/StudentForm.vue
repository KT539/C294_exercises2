<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['student-added'])

const student = reactive({
  firstName: '',
  lastName: '',
  description: '',
  birthDate: '',
  gender: '',
  motivation: 50,
  interests: [],
  mood: ''
})

function getEmojiByMood(mood) {
  let emojis = ["😢", "😁", "😊", "😒", "😃", "😐", "😖", "😤", "😟", "😆"]
  let index = Math.floor(mood / 10) - 1
  if (index === -1) index = 0
  return emojis[index]
}

function onSubmit() {
  if (
      !student.firstName ||
      !student.lastName ||
      !student.description ||
      !student.birthDate ||
      !student.gender ||
      student.interests.length === 0
  ) {
    alert("All fields must be filled in.")
    return
  }

  emit('student-added', {
    firstName: student.firstName,
    lastName: student.lastName,
    description: student.description,
    birthDate: student.birthDate,
    gender: student.gender,
    interests: student.interests,
    motivation: student.motivation,
    emoji: getEmojiByMood(student.motivation)
  })

  // data reset
  student.firstName = ''
  student.lastName = ''
  student.description = ''
  student.birthDate = ''
  student.gender = ''
  student.motivation = 50
  student.interests = []
}
</script>

<template>
  <div class="card p-4 mb-4">
    <h3 class="mb-4 text-center">Inscription Form</h3>

    <form @submit.prevent="onSubmit">
      <div class="row mb-3">
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" v-model="student.lastName">
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" v-model="student.firstName">
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Description:</label>
        <textarea class="form-control" rows="3" v-model="student.description"></textarea>
      </div>

      <div class="mb-3">
        <label class="form-label me-3">Gender:</label>
        <div class="form-check form-check">
          <input class="form-check-input" type="radio" id="male" value="Male" v-model="student.gender">
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check form-check">
          <input class="form-check-input" type="radio" id="female" value="Female" v-model="student.gender">
          <label class="form-check-label" for="female">Female</label>
        </div>
        <div class="form-check form-check">
          <input class="form-check-input" type="radio" id="other" value="Other" v-model="student.gender">
          <label class="form-check-label" for="other">Other</label>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label me-3">Interests:</label><br>
        <div class="form-check form-check">
          <input class="form-check-input" type="checkbox" id="sport" value="Sport" v-model="student.interests">
          <label class="form-check-label" for="sport">Sport</label>
        </div>
        <div class="form-check form-check">
          <input class="form-check-input" type="checkbox" id="science" value="Science" v-model="student.interests">
          <label class="form-check-label" for="science">Science</label>
        </div>
        <div class="form-check form-check">
          <input class="form-check-input" type="checkbox" id="technology" value="Technology" v-model="student.interests">
          <label class="form-check-label" for="technology">Technology</label>
        </div>
        <div class="form-check form-check">
          <input class="form-check-input" type="checkbox" id="environment" value="Environment" v-model="student.interests">
          <label class="form-check-label" for="environment">Environment</label>
        </div>
        <div class="form-check form-check">
          <input class="form-check-input" type="checkbox" id="news" value="News" v-model="student.interests">
          <label class="form-check-label" for="news">News</label>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Birthdate:</label>
        <input type="date" class="form-control" v-model="student.birthDate">
      </div>

      <div class="mb-3">
        <label class="form-label">Motivation: {{ student.motivation }}% {{ getEmojiByMood(student.motivation) }}</label>
        <input type="range" class="form-range" min="0" max="100" v-model.number="student.motivation">
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary mt-3">Add</button>
      </div>
    </form>
  </div>
</template>