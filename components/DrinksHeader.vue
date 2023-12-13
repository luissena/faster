<template>
  <header
    class="flex flex-col gap-4 lg:flex-row justify-between lg:items-center"
  >
    <div class="flex gap-2 items-center">
      <Icon size="30px" name="bx:drink" />
      <h1 class="text-3xl font-bold text-gray-800">Bebidas</h1>
    </div>

    <div class="flex gap-4">
      <DrinksCategoryFilter />
      <DrinksSearchByName />
    </div>
  </header>
</template>
