<template>
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-11/12 mx-auto">
    <template v-for="country in countries" :key="country.name">
      <CardCountry :country="country" />
    </template>
  </section>
</template>
<script setup lang="ts">
import type { Country } from '@/interfaces/Country.interface'
import CardCountry from './CardCountry.vue'

interface Props {
  countries: Country[]
}

const { countries } = defineProps<Props>()
</script>
