import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from '@/interfaces/Country.interface'
import data from '@/data/data.json'

export const useContryStore = defineStore('contry', () => {
  const countries = ref<Country[]>([])
  const country = ref<Country>()

  const initializeCountries = () => {
    countries.value = data as Country[]
  }

  const searchCountries = (searchDescription: string) => {
    searchDescription = searchDescription.toLocaleLowerCase()
    countries.value = data.filter((country) =>
      country.name.toLocaleLowerCase().startsWith(searchDescription)
    )
  }

  const setCountryByName = (name: string) => {
    country.value = data.find((c) => c.name.toLocaleLowerCase() === name.toLocaleLowerCase())
  }

  const setCountriesByRegion = (region: string) => {
    countries.value = region ? data.filter((c) => c.region.toLocaleLowerCase() === region.toLocaleLowerCase()) : data;
  }

  initializeCountries()

  return { countries, country, searchCountries, setCountryByName, setCountriesByRegion }
})
