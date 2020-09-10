import { SystemState, SystemAction } from "./types";
import { Store } from "../stores/types";

const initialSystemState: SystemState = {
  currentStore: null,
}

export const systemReducer = (state: SystemState = initialSystemState, action: SystemAction): SystemState => {
  switch (action.type) {
    case "SET_CURRENT_STORE":
      return { ...state, currentStore: action.payload }
    default:
      return state
  }
}

export const setCurrentStore = (store: Store) => {
  return {
    type: "SET_CURRENT_STORE",
    payload: store,
  }
}