<script setup lang="ts">
export interface IDrinksData {
  drinks: {
    strDrink: string
    strDrinkThumb: string
    idDrink: string
  }[]
}
const { params } = useRoute()

const { data, pending } = await useFetch<IDrinksData>(
  `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.category}`
)
</script>

<template>
  <DrinksHeader />

  <div
    v-if="data"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
  >
    <DrinksCard
      v-for="drink in data?.drinks"
      :key="drink.idDrink"
      :id="drink.idDrink"
      :name="drink.strDrink"
      :image="drink.strDrinkThumb"
    />
  </div>

  <p v-else-if="pending" class="text-center text-lg text-gray-400">
    Carregando...
  </p>

  <p v-else class="text-center text-lg text-gray-400">
    Nenhuma bebida encontrada. Por favor, selecione uma categoria ou busque por
    um nome.
  </p>
</template>
