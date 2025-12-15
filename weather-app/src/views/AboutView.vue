<template>
  <div class="home-view">
    <div class="nav-links">
      <router-link to="/">Météo Sainte-Croix</router-link>
      <span> | </span>
      <router-link to="/">Météo</router-link>
      <span> | </span>
      <router-link to="/about">À propos</router-link>
    </div>
    <p>Ce site permet de visualiser la météo actuelle.</p>
  </div>
</template>

<script setup></script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-links {
  margin-bottom: 25px;
  font-size: 1.2em;
}

.nav-links a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-links a.router-link-active {
  color: #0000ee;
}
</style>
