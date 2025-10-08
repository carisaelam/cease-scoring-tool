<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">Scoring Tool</a>
      <div class="navbar-nav">
        <RouterLink class="nav-link" to="/">About</RouterLink>
        <RouterLink class="nav-link" to="/form">Form</RouterLink>
      </div>
    </div>
  </nav>

  <main class="container py-4">
    <RouterView />
  </main>
</template>
