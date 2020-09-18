import { SystemState, SystemAction, User, FeedbackVariant } from "./types";
import { Dispatch } from "react";
import { get_user_from_cookie } from "../../services/users";

const initialSystemState: SystemState = {
  logged_user: null,
  feedback: null,
}

export const systemReducer = (state: SystemState = initialSystemState, action: SystemAction): SystemState => {
  switch (action.type) {
    case "SET_LOGGED_USER":
      return { ...state, logged_user: action.payload }
    case "SET_FEEDBACK":
      return { ...state, feedback: action.payload }
    case "CLEAR_FEEDBACK":
      return { ...state, feedback: null }
    default:
      return state
  }
}

let timeout_id: ReturnType<typeof setTimeout> | undefined = undefined

export const set_feedback = (message: string, variant: FeedbackVariant, time_sec: number = 5) => {
  return async (dispatch: Dispatch<SystemAction>) => {
    if (timeout_id) clearTimeout(timeout_id)

    timeout_id = setTimeout(() => {
      dispatch({
        type: "CLEAR_FEEDBACK",
      })
    }, 1000*time_sec)

    dispatch({
      type: "SET_FEEDBACK",
      payload: { message, variant, },
    })
  }
}

export const set_logged_user = (user: User): SystemAction => {
  return {
    type: "SET_LOGGED_USER",
    payload: user,
  }
}

export const get_logged_user = () => {
  return async (dispatch: Dispatch<SystemAction>) => {
    try {
      const logged_user = await get_user_from_cookie()
      dispatch(set_logged_user(logged_user))
    }
    catch (e) {
      
    }
  }
}