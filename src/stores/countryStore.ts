import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from '@/interfaces/Country.interface'
import data from "../data/data.json";

export const useContryStore = defineStore('contry', () => {
  const countries = ref<Country[]>(data as Country[]);

  const getCountriesFilter = (filter: {}) => countries.value.filter(() => filter);

  const getCountryByName = (name: string) => countries.value.filter(c => c.name === name);

  return { countries, getCountriesFilter, getCountryByName }
})
