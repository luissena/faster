<script setup lang="ts">
import type { IDrink, IDrinksData } from "./[category].vue"

let debounce: ReturnType<typeof setTimeout>

const drinks = ref<IDrink[]>([])

const fetchDrinks = async (value: string) => {
  clearTimeout(debounce)
  debounce = setTimeout(async () => {
    console.log("Realizando a requisição...")
    const { data } = await useFetch<IDrinksData>(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
    )
    drinks.value = data.value?.drinks ?? []
  }, 500)
}

const selectedDrink = ref<IDrink | null>(null)
const dialog = ref(false)
const setDialog = (value: boolean, drink?: IDrink) => {
  if (drink) selectedDrink.value = drink
  dialog.value = value
}
</script>

<template>
  <DrinksHeader @update:search="fetchDrinks" />

  <div
    v-if="drinks.length > 0"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
  >
    <DrinksCard
      v-for="drink in drinks"
      @click="setDialog(true, drink)"
      :key="drink.idDrink"
      :drink="drink"
    />
  </div>

  <p v-else class="text-center text-lg text-gray-400">
    Nenhuma bebida encontrada. Por favor, selecione uma categoria ou busque por
    um nome.
  </p>

  <DialogDrinksDetail
    v-if="dialog"
    :open-dialog="dialog"
    :drink="selectedDrink"
    @close-dialog="setDialog(false)"
  />
</template>
