<script setup lang="ts">
import type { IDrink } from "~/pages/[category].vue"
import { useFavoriteDrinks } from "../composables/useFavoriteDrinks"

interface IFavoriteDrinkButtonProps {
  drink: IDrink
}
const { drink } = defineProps<IFavoriteDrinkButtonProps>()

const { isFavoriteDrink, handleFavoriteDrink } = useFavoriteDrinks(drink)
</script>

<template>
  <ClientOnly>
    <Icon
      v-if="isFavoriteDrink"
      @click.stop="handleFavoriteDrink"
      class="absolute right-2 top-2 text-red-600 bg-gray-50 p-1 shadow drop-shadow rounded-full hover:text-gray-500"
      size="30px"
      name="material-symbols:favorite"
    />
    <Icon
      v-else
      @click.stop="handleFavoriteDrink"
      class="absolute right-2 top-2 text-gray-500 hover:text-red-600 bg-gray-50 p-1 shadow drop-shadow rounded-full"
      size="30px"
      name="material-symbols:favorite-outline"
    />
  </ClientOnly>
</template>
