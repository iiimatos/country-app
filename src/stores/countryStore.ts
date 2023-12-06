import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from '@/interfaces/Country.interface'
import data from "@/data/data.json";

export const useContryStore = defineStore('contry', () => {
  const countries = ref<Country[]>([]);

  const initializeCountries = () => {
    countries.value = data as Country[];
  };

  const getCountriesFilter = (filter: {}) => {
    countries.value = countries.value.filter(() => filter);
  }

  const getCountryByName = (name: string) => countries.value.find(c => c.name === name);

  initializeCountries();

  return { countries,  getCountriesFilter, getCountryByName }
})
