<template>
<nav class="navbar navbar-expand-lg bg-white shadow-sm">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand text-success fw-bold" >VueAuth</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" active-class="text-success" class="nav-link ">Inicio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/auth" active-class="text-success" class="nav-link ">Autenticacion</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>