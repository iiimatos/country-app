<template>
  <div class="flex justify-between flex-col gap-5 content-center md:flex-row md:gap-0">
    <div class="relative md:w-96">
      <div
        class="h-5 w-5 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        @click="emit('searchText', searchText)"
      >
        <MagnifyingGlassIcon />
      </div>
      <input
        v-model="searchText"
        class="py-4 px-6 w-full rounded-xl bg-white shadow-sm focus:outline-none"
        name="searchText"
        @keyup="emit('searchText', searchText)"
        placeholder="Search for a country..."
      />
    </div>
    <div class="relative md:w-60">
      <select
        name="selectedRegion"
        v-model="selectedRegion"
        @change="emit('regionCountry', selectedRegion)"
        class="block w-full appearance-none py-4 pl-4 shadow-sm text-gray-700 rounded-xl leading-tight focus:outline-none"
      >
        <option value="" class="text-gray-500" selected>Filter by region</option>
        <template v-for="continent in continents" :key="continent">
          <option :value="continent">{{ continent }}</option>
        </template>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <div class="fill-current h-4 w-4">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['searchText', 'regionCountry'])

const selectedRegion = ref('')
const searchText = ref('')

const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
</script>
