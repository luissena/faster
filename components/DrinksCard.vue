<script setup lang="ts">
interface IDrinksCardProps {
  id: string
  name: string
  image: string
}

const props = defineProps<IDrinksCardProps>()
</script>

<template>
  <div
    class="flex flex-col gap-2 border rounded-xl hover:shadow cursor-pointer"
  >
    <img class="rounded-t-lg" :src="props.image" alt="drink" />
    <h1 class="mx-auto text-center p-2">{{ props.name }}</h1>
  </div>
</template>
