<script setup lang="ts">
import { ref } from "vue"

interface ICategoryData {
  drinks: {
    strCategory: string
  }[]
}

const { data } = await useFetch<ICategoryData>(
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
)

const categorySelected = ref("")
</script>

<template>
  <select
    class="border border-gray-300 rounded-md px-4 py-2 text-gray-400"
    v-model="categorySelected"
  >
    <option disabled value="">Categorias</option>
    <option v-for="category in data?.drinks">{{ category.strCategory }}</option>
  </select>
</template>
