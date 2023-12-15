<script setup lang="ts">
useHead({
  title: "Faster Drinks",
  meta: [
    {
      name: "description",
      content: "Faster Drinks é um site que lista alguns drinks famosos.",
    },
  ],
})
</script>
<template>
  <header>
    <img class="mx-auto py-5" src="/faster_logo.png" />
  </header>

  <main class="py-12 px-8 mx-auto lg:max-w-7xl">
    <NuxtPage />
  </main>
</template>
