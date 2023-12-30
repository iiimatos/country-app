<template>
  <Header />
  <main class="container mx-auto mt-10 mb-5 px-4 md:px-0">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'
</script>
