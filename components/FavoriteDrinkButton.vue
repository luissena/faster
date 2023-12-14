<script setup lang="ts">
import type { IDrink } from "~/pages/[category].vue"

interface IFavoriteDrinkButtonProps {
  drink: IDrink
}
const { drink } = defineProps<IFavoriteDrinkButtonProps>()

const isFavoriteDrinkInitial = (drink: IDrink) => {
  let favoriteDrinks: IDrink[] = []
  if (process.client) {
    favoriteDrinks = JSON.parse(localStorage.getItem("favorite-drinks") || "[]")
  }
  return favoriteDrinks.some((item: IDrink) => item.idDrink === drink.idDrink)
}

const isFavoriteDrink = ref(isFavoriteDrinkInitial(drink))

const handleFavoriteDrink = () => {
  const favoriteDrinks = JSON.parse(
    localStorage.getItem("favorite-drinks") || "[]"
  )

  const alreadyFavorite = isFavoriteDrink.value

  if (alreadyFavorite) {
    localStorage.setItem(
      "favorite-drinks",
      JSON.stringify(
        favoriteDrinks.filter((item: IDrink) => item.idDrink !== drink.idDrink)
      )
    )
    isFavoriteDrink.value = false
  } else {
    localStorage.setItem(
      "favorite-drinks",
      JSON.stringify([...favoriteDrinks, drink])
    )
    isFavoriteDrink.value = true
  }
}
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
