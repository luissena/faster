import { ref } from "vue"

interface ICategoryData {
  drinks: {
    strCategory: string
  }[]
}

export async function useDrinksCategories() {
  const { push } = useRouter()
  const { params } = useRoute()
  const paramsCategory = params.category?.toString()

  const { data } = await useFetch<ICategoryData>(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  )

  const categorySelected = ref(paramsCategory ? paramsCategory : "")

  watch(categorySelected, () => {
    if (categorySelected.value) {
      push(`/${encodeURIComponent(categorySelected.value)}`)
    }
  })

  return {
    categorySelected,
    categories: data.value?.drinks,
  }
}
