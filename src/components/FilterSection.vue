<template>
  <div class="flex justify-between content-center">
    <div class="relative w-96">
      <div class="h-5 w-5 absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
        <MagnifyingGlassIcon />
      </div>
      <input class="py-4 px-6 w-full rounded-xl bg-white shadow-sm focus:outline-none" name="nameCountry"
        placeholder="Search for a country">
    </div>
    <div class="w-60 relative">
      <select class="block w-full appearance-none py-4 pl-4 shadow-sm text-gray-700 rounded-xl leading-tight focus:outline-none">
        <option value="" class="text-gray-500" selected>Filter by region</option>
        <template v-for="continent in continents" :key="continent">
          <option :value="continent">{{ continent }}</option>
        </template>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <div class="fill-current h-4 w-4">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";

const continents = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

</script>