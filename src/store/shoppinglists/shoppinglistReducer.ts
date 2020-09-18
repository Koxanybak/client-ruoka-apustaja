import { ShoppingListState, ShoppingListAction } from "./types";
import { Dispatch } from "redux";
import { get_shopping_lists } from "../../services/shoppinglists";
import { User } from "../system/types";

const initialState: ShoppingListState = {
  shopping_lists: null
}

export const shoppinglistReducer = (state: ShoppingListState = initialState, action: ShoppingListAction): ShoppingListState => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, shopping_lists: action.payload }
    case "SET_ERROR":
      return { ...state, shopping_list_error: action.payload }
    default:
      return state
  }
}

export const initialize_shopping_lists = (user: User) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: "SET_ERROR",
        payload: undefined,
      })
      const shopping_lists = await get_shopping_lists(user)
      dispatch({
        type: "INITIALIZE",
        payload: shopping_lists,
      })
    } catch(e) {
      dispatch({
        type: "SET_ERROR",
        payload: { message: e.response?.data?.error, status: e.response?.status },
      })
    }
  }
}