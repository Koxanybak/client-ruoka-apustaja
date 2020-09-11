import { SystemState, SystemAction, User } from "./types";
import { Store } from "../stores/types";

const initialSystemState: SystemState = {
  currentStore: null,
  logged_user: null
}

export const systemReducer = (state: SystemState = initialSystemState, action: SystemAction): SystemState => {
  switch (action.type) {
    case "SET_CURRENT_STORE":
      return { ...state, currentStore: action.payload }
    case "SET_LOGGED_USER":
      return { ...state, logged_user: action.payload }
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

export const set_logged_user = (user: User) => {
  return {
    type: "SET_LOGGED_USER",
    payload: user,
  }
}