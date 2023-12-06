<template>
  <section class="space-y-12">
    <FilterSection />
    <SectionCountries :countries="countries" />
  </section>
</template>

<script setup lang="ts">
import FilterSection from '@/components/FilterSection.vue';
import SectionCountries from '@/components/SectionCountries.vue';
import { useContryStore } from '@/stores/countryStore';

const { countries } = useContryStore();

</script>
