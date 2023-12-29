<script setup lang="ts">
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>

  <h1>Welcome to the Kayak Store</h1>

  <router-view />
</template>

<style scoped>

#nav {
  justify-content: center;
  display: flex;
  gap: 1rem;
}

</style>


