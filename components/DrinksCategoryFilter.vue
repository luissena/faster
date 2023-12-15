<script setup lang="ts">
import { useDrinksCategories } from "~/composables/useDrinksCategories"

const { categories, categorySelected } = await useDrinksCategories()
</script>

<template>
  <select
    class="border border-gray-300 rounded-md px-4 py-2 text-gray-400"
    v-model="categorySelected"
  >
    <option disabled value="">Categorias</option>
    <option v-for="category in categories">{{ category.strCategory }}</option>
  </select>
</template>
