<script setup lang="ts">
const emit = defineEmits(["update:search"])

const search = ref("")

const onChangeSearch = (event: Event) => {
  search.value = (event.target as HTMLInputElement).value
  emit("update:search", search.value)
}
</script>

<template>
  <input
    :value="search"
    @input="onChangeSearch"
    type="text"
    class="border border-gray-300 rounded-md px-4 py-2"
    placeholder="Buscar por nome"
  />
</template>
