import {
  Store,
  StoreAction,
} from "./types"
import { getStores } from "../../services/stores"
import { Dispatch } from "react";

export const storeReducer = (stores: Store[] = [], action: StoreAction): Store[] => {
  switch (action.type) {
    case "GET_ALL_STORES":
      return action.payload
    default:
      return stores
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

export default storeReducer