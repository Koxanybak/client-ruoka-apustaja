import {
  StoreAction,
  StoreState,
} from "./types"
import { getStores, getStoreById } from "../../services/stores"
import { Dispatch } from "react";

const initialState: StoreState = {
  currentStore: null,
  all: [],
  errors: {
    all: false,
    current: false,
  },
}

export const storeReducer = (state: StoreState = initialState, action: StoreAction): StoreState => {
  switch (action.type) {
    case "GET_ALL_STORES":
      return { ...state, all: action.payload }
    case "SET_CURRENT_STORE":
      return { ...state, currentStore: action.payload }
    case "SET_ERROR":
      return { ...state, errors: { ...state.errors, ...action.payload }}
    default:
      return state
  }
}

export const getAllStores = () => {
  return async (dispatch: Dispatch<StoreAction>) => {
    try {
      const stores = await getStores()
      dispatch({
        type: "GET_ALL_STORES",
        payload: stores,
      })
      dispatch({
        type: "SET_ERROR",
        payload: { all: false }
      })
    }
    catch {
      dispatch({
        type: "SET_ERROR",
        payload: { all: true }
      })
    }
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