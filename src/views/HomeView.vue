<template>
  <SectionCountries :countries="countries" />
</template>

<script setup lang="ts">
import SectionCountries from '@/components/SectionCountries.vue';
import { useContryStore } from '@/stores/countryStore';

const { countries } = useContryStore();

</script>
