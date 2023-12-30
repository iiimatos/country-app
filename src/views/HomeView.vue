<template>
  <section class="space-y-12">
    <FilterSection @search-text="handleSearchCountry" @region-country="handleSelectRegion" />
    <SectionCountries :countries="countries" />
  </section>
</template>

<script setup lang="ts">
import FilterSection from '@/components/FilterSection.vue'
import SectionCountries from '@/components/SectionCountries.vue'
import { useContryStore } from '@/stores/countryStore'
import { storeToRefs } from 'pinia';

const countryStore  = useContryStore()

const { countries } = storeToRefs(countryStore);
const { searchCountries, setCountriesByRegion } = countryStore;

const handleSelectRegion = (region: string) => {
  setCountriesByRegion(region)
}

const handleSearchCountry = (searchText: string) => {
  searchCountries(searchText)
}
</script>
