<script setup lang="ts">
export interface IDrink {
  strDrink: string
  strDrinkThumb: string
  idDrink: string
}
export interface IDrinksData {
  drinks: IDrink[]
}
const { params } = useRoute()

const { data, pending } = await useFetch<IDrinksData>(
  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.category}`
)

const selectedDrink = ref<IDrink | null>(null)
const dialog = ref(false)

const setDialog = (value: boolean, drink?: IDrink) => {
  if (drink) selectedDrink.value = drink
  dialog.value = value
}
</script>

<template>
  <DrinksHeader />

  <div
    v-if="data"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
  >
    <DrinksCard
      v-for="drink in data?.drinks"
      @click="setDialog(true, drink)"
      :key="drink.idDrink"
      :drink="drink"
    />
  </div>

  <p v-else-if="pending" class="text-center text-lg text-gray-400">
    Carregando...
  </p>

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
