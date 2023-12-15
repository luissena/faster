<script setup lang="ts">
import type { IDrink } from "~/pages/[category].vue"

interface IDrinksCardProps {
  drink: IDrink
}

const { drink } = defineProps<IDrinksCardProps>()
</script>

<template>
  <div
    class="relative flex flex-col gap-2 border rounded-xl hover:shadow cursor-pointer"
  >
    <NuxtImg class="rounded-t-lg" :src="drink.strDrinkThumb" alt="drink" />
    <FavoriteDrinkButton :drink="drink" />
    <h1 class="mx-auto text-center p-2">{{ drink.strDrink }}</h1>
  </div>
</template>
