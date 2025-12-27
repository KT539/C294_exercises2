<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <nav class="nav-links">
        <router-link :to="{ name: 'event-list' }">Événements</router-link>
        <span> | </span>
        <router-link :to="{ name: 'about' }">À propos</router-link>
        <span> | </span>
        <router-link :to="{ name: 'event-create' }">Nouveau</router-link>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-links {
  padding: 30px;
  font-size: 1.2em;
}

.nav-links a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links a.router-link-active {
  color: #0000ee;
  border-bottom: 2px solid #0000ee;
}
</style>
