import { describe, it } from "vitest"
import type { IDrink } from "~/pages/[category].vue"
import { useFavoriteDrinks } from "../useFavoriteDrinks"

describe("useFavoriteDrinks", () => {
  let sut: ReturnType<typeof useFavoriteDrinks>
  let drink: IDrink
  beforeEach(() => {
    process.client = true

    drink = {
      idDrink: "1",
      strDrink: "drink",
      strDrinkThumb: "thumb",
    }
    localStorage.setItem("favorite-drinks", JSON.stringify([drink]))

    sut = useFavoriteDrinks(drink)
  })

  it("should be start with isFavoriteDrink true when I have this drink in localstorage", () => {
    expect(sut.isFavoriteDrink.value).toBe(true)
  })

  it("should be start with isFavoriteDrink false when I don't have this drink in localstorage", () => {
    localStorage.setItem("favorite-drinks", JSON.stringify([]))
    sut = useFavoriteDrinks(drink)

    expect(sut.isFavoriteDrink.value).toBe(false)
  })

  it("should be able to add a drink to favorite", () => {
    localStorage.setItem("favorite-drinks", JSON.stringify([]))
    sut = useFavoriteDrinks(drink)
    sut.handleFavoriteDrink()

    expect(sut.isFavoriteDrink.value).toBe(true)
  })

  it("should be able to remove a drink from favorite", () => {
    sut.handleFavoriteDrink()

    expect(sut.isFavoriteDrink.value).toBe(false)
  })
})
