import { ProductState, ProductAction, SLSearch } from "./types";
import { Dispatch } from "redux";
import { getProductSearch } from "../../services/products";

const initialState: ProductState = {
  searchResult: null
}

export const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case "GET_SEARCH_RESULT":
      return { ...state, searchResult: action.payload }
    default:
      return state
  }
}

export const getSearchResult = (searchBody: SLSearch) => {
  return async (dispatch: Dispatch) => {
    console.log(searchBody)
    const searchResult = await getProductSearch(searchBody)
    console.log(searchResult)
    dispatch({
      type: "GET_SEARCH_RESULT",
      payload: searchResult,
    })
  }
}