import { ProductState, ProductAction, SLSearch } from "./types";
import { Dispatch } from "redux";
import { getProductSearch } from "../../services/products";

const initialState: ProductState = {
  searchResult: null,
  error: null,
}

export const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case "GET_SEARCH_RESULT":
      return { ...state, searchResult: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export const getSearchResult = (searchBody: SLSearch) => {
  return async (dispatch: Dispatch) => {
    try {
      const searchResult = await getProductSearch(searchBody)
      dispatch({
        type: "GET_SEARCH_RESULT",
        payload: searchResult,
      })
      dispatch({
        type: "SET_ERROR",
        payload: null,
      })
    }
    catch (err) {
      console.log({...err})
      dispatch({
        type: "SET_ERROR",
        payload: {
          message: err.response?.data?.error,
          status: err.response?.status,
        },
      })
    }
  }
}