<script setup lang="ts">
const emit = defineEmits(["update:search"])

const transportBetweenPageAndInput = (value: string) => {
  emit("update:search", value)
}
</script>

<template>
  <header
    class="flex flex-col gap-4 lg:flex-row justify-between lg:items-center mb-12"
  >
    <div class="flex gap-2 items-center">
      <Icon size="30px" name="bx:drink" />
      <h1 class="text-3xl font-bold text-gray-800">Bebidas</h1>
    </div>

    <div class="flex flex-col lg:flex-row gap-4">
      <DrinksCategoryFilter />
      <DrinksSearchByName @update:search="transportBetweenPageAndInput" />
    </div>
  </header>
</template>
