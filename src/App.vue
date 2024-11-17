<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';


</script>

<template>
  <header>
    <AppNavbar />
  </header>
  <main class="mt-5 container">
    <RouterView />  
  </main>
</template>

<style >
body{
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
}
</style>
