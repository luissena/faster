<script setup lang="ts">
import type { IDrink } from "~/pages/[category].vue"

interface IDialogDrinksDetailProps {
  drink: IDrink | null
  openDialog: boolean
}

const props = defineProps<IDialogDrinksDetailProps>()
defineEmits(["closeDialog"])

interface IDrinksDetail {
  drinks: {
    strInstructions: string
  }[]
}

const { data: drinkInstructions } = await useFetch<IDrinksDetail>(
  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${props.drink?.idDrink}`
)
</script>

<template>
  <dialog
    class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75"
    :open="openDialog"
  >
    <div
      class="bg-gray-50 p-8 border rounded-lg max-w-[600px] min-w-[400px] lg:min-w-[600px lg:max-w-[900px] mx-5"
    >
      <div class="mb-5 text-gray-400 w-full flex justify-end">
        <Icon
          @click="$emit('closeDialog')"
          name="mdi:close"
          class="cursor-pointer hover:shadow-sm hover:bg-gray-100 rounded-full"
          size="20px"
        />
      </div>
      <div class="flex flex-col-reverse gap-10 lg:flex-row justify-between">
        <div class="flex flex-col justify-between w-full mr-10">
          <div>
            <h1 class="font-medium text-xl mb-2">
              {{ props.drink?.strDrink }}
            </h1>
            <h2 class="font-medium text-gray-500">Instruções</h2>
            <p class="text-gray-500">
              {{
                drinkInstructions?.drinks[0]?.strInstructions
                  ? drinkInstructions.drinks[0]?.strInstructions
                  : "Ainda não há instruções para essa bebida."
              }}
            </p>
          </div>

          <button
            @click="$emit('closeDialog')"
            class="bg-slate-900 text-gray-100 rounded-md p-1 hover:bg-slate-800 hover:text-gray-50 hover:shadow mt-5"
          >
            Fechar detalhes
          </button>
        </div>
        <img
          class="rounded-lg lg:w-1/2 object-contain"
          :src="props.drink?.strDrinkThumb"
        />
      </div>
    </div>
  </dialog>
</template>
