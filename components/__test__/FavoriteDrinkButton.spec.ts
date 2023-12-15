import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import type { IDrink } from "~/pages/[category].vue"
import FavoriteDrinkButtonVue from "../FavoriteDrinkButton.vue"

describe("FavoriteDrinkButton.vue", async () => {
  let drink: IDrink
  let sut: ReturnType<typeof mount>

  beforeEach(() => {
    process.client = true

    drink = {
      idDrink: "1",
      strDrink: "Test",
      strDrinkThumb: "https://via.placeholder.com/150",
    }

    localStorage.setItem("favorite-drinks", JSON.stringify([drink]))

    sut = mount(FavoriteDrinkButtonVue, {
      props: {
        drink,
      },
    })
  })

  it("should be rendered", async () => {
    expect(sut.exists()).toBe(true)
  })

  it("should be rendered filled heart when favorite is true", async () => {
    expect(sut.find("Icon").attributes("name")).toBe(
      "material-symbols:favorite"
    )
    expect(sut.find("Icon").attributes("name")).not.toBe(
      "material-symbols:favorite-outline"
    )
  })

  it("should be rendered empty heart when favorite is false", async () => {
    sut = mount(FavoriteDrinkButtonVue, {
      props: {
        drink: {
          ...drink,
          idDrink: "2",
        },
      },
    })

    expect(sut.find("Icon").attributes("name")).not.toBe(
      "material-symbols:favorite"
    )
    expect(sut.find("Icon").attributes("name")).toBe(
      "material-symbols:favorite-outline"
    )
  })

  it("should remove favorite when click in filled heart", async () => {
    await sut.find("Icon").trigger("click")

    expect(sut.find("Icon").attributes("name")).not.toBe(
      "material-symbols:favorite"
    )
    expect(sut.find("Icon").attributes("name")).toBe(
      "material-symbols:favorite-outline"
    )
  })

  it("should add favorite when click in outlined heart", async () => {
    sut = mount(FavoriteDrinkButtonVue, {
      props: {
        drink: {
          ...drink,
          idDrink: "2",
        },
      },
    })
    await sut.find("Icon").trigger("click")

    expect(sut.find("Icon").attributes("name")).toBe(
      "material-symbols:favorite"
    )
    expect(sut.find("Icon").attributes("name")).not.toBe(
      "material-symbols:favorite-outline"
    )
  })
})
