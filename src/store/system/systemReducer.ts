import { SystemState, SystemAction, User, FeedbackVariant } from "./types";
import { Store } from "../stores/types";
import { store } from "../index"
import { clearTimeout } from "timers";

const initialSystemState: SystemState = {
  currentStore: null,
  logged_user: null,
  feedback: null,
}

export const systemReducer = (state: SystemState = initialSystemState, action: SystemAction): SystemState => {
  switch (action.type) {
    case "SET_CURRENT_STORE":
      return { ...state, currentStore: action.payload }
    case "SET_LOGGED_USER":
      return { ...state, logged_user: action.payload }
    case "SET_FEEDBACK":
      return { ...state, feedback: action.payload }
    case "CLEAR_FEEDBACK":
      return { ... state, feedback: null }
    default:
      return state
  }
}

let timeout_id: ReturnType<typeof setTimeout> | undefined = undefined

const clear_feedback = () => {
  store.dispatch({
    type: "CLEAR_FEEDBACK",
  })
}

export const set_feedback = (message: string, variant: FeedbackVariant, time_sec: number = 5) => {
  if (timeout_id) clearTimeout(timeout_id)

  timeout_id = setTimeout(() => {
    clear_feedback()
  }, 1000*time_sec)

  return {
    type: "SET_FEEDBACK",
    payload: { message, variant, },
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