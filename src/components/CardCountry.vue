<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:-translate-y-1">
    <img class="w-full h-48" :src="country.flag" alt="Sunset in the mountains">
    <div class="px-6 py-4 bg-white">
      <div class="font-bold text-xl mb-2">{{ country.name }}</div>
      <p class="text-gray-700 font-bold text-base">
        Population:
        <span class="font-normal">
          {{ country.population.toLocaleString('en-US') }}
        </span>
      </p>
      <p class="text-gray-700 font-bold text-base">
        Region:
        <span class="font-normal">
          {{ country.region }}
        </span>
      </p>
      <p class="text-gray-700 font-bold text-base">
        Capital:
        <span class="font-normal">
          {{ country.capital }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Country } from '@/interfaces/Country.interface';

interface Props {
  country: Country
}

const { country } = defineProps<Props>();
</script>