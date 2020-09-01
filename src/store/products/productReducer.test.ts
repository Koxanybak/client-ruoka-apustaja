import {productReducer} from "./productReducer"
import deepFreeze from "deep-freeze"

describe('noteReducer', () => {
  test('returns new state with action NEW_NOTE', () => {
    const state = {
      searchResult: null,
    }
    const action = {
      type: "GET_SEARCH_RESULT",
      payload: {
        kurkku: [{
          id: 9431,
          imgSrc: "/assets/ei-tuotekuvaa.svg",
          link: "https://www.k-ruoka.fi/kauppa/tuote/kurkku-suomi-kg-2000604700007",
          name: "Kurkku Suomi",
          price: 0.52,
          pricePerUnit: null,
          storeID: 705,
          unit: null
        }]
      }
    }

    deepFreeze(state)
    const newState = productReducer(state, action)

    expect(newState.searchResult?.kurkku).toHaveLength(1)
    expect(newState.searchResult).toContainEqual(action.payload)
  })
})