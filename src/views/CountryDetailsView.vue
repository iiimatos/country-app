<template>
  <main>
    <h1 class="text-3xl font-bold underline">Details page</h1>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const countryName = ref('')

onMounted(() => {
  countryName.value = route.params.name as string
  console.log(countryName.value)
})
</script>
