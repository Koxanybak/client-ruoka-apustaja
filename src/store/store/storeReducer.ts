import {
  StoreAction,
  StoreState,
} from "./types"
import { getStores, getStoreById } from "../../services/stores"
import { Dispatch } from "react";

const initialState: StoreState = {
  currentStore: null,
  all: []
}

export const storeReducer = (state: StoreState = initialState, action: StoreAction): StoreState => {
  switch (action.type) {
    case "GET_ALL_STORES":
      return { ...state, all: action.payload }
    case "SET_CURRENT_STORE":
      return { ...state, currentStore: action.payload }
    default:
      return state
  }
}

export const getAllStores = () => {
  return async (dispatch: Dispatch<StoreAction>) => {
    const stores = await getStores()
    dispatch({
      type: "GET_ALL_STORES",
      payload: stores,
    })
  }
}

export const getDefaultStore = () => {
  return async (dispatch: Dispatch<StoreAction>) => {
    const store = await getStoreById(705)
    dispatch({
      type: "SET_CURRENT_STORE",
      payload: store,
    })
  }
}

export default storeReducer