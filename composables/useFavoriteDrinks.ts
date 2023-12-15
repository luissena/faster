import { ref } from "vue"
import type { IDrink } from "~/pages/[category].vue"

export function useFavoriteDrinks(drink: IDrink) {
  const isFavoriteDrinkInitial = (drink: IDrink) => {
    let favoriteDrinks: IDrink[] = []

    if (process.client) {
      favoriteDrinks = JSON.parse(
        localStorage.getItem("favorite-drinks") || "[]"
      )
    }

    return favoriteDrinks.some((d) => d.idDrink === drink.idDrink)
  }
  const isFavoriteDrink = ref(isFavoriteDrinkInitial(drink))

  const handleFavoriteDrink = () => {
    const favoriteDrinks = JSON.parse(
      localStorage.getItem("favorite-drinks") || "[]"
    )

    const alreadyFavorite = isFavoriteDrink.value

    if (alreadyFavorite) {
      localStorage.setItem(
        "favorite-drinks",
        JSON.stringify(
          favoriteDrinks.filter(
            (item: IDrink) => item.idDrink !== drink.idDrink
          )
        )
      )
      isFavoriteDrink.value = false
    } else {
      localStorage.setItem(
        "favorite-drinks",
        JSON.stringify([...favoriteDrinks, drink])
      )
      isFavoriteDrink.value = true
    }
  }

  return {
    isFavoriteDrink,
    handleFavoriteDrink,
  }
}
