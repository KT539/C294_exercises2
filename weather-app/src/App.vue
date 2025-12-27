<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav class="nav-links">
      <router-link to="/Sainte-Croix">Météo Sainte-Croix</router-link> |
      <router-link to="/weather">Météo</router-link> |
      <router-link to="/about">À propos</router-link>
    </nav>
    <RouterView />
  </div>
</template>

<style>
#app { font-family: sans-serif; text-align: center; padding: 20px; }
.nav-links { margin-bottom: 30px; }
.nav-links a { font-weight: bold; color: #2c3e50; text-decoration: none; margin: 0 10px; }
.nav-links a.router-link-active { color: #42b983; }
</style>
