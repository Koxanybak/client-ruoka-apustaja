import { ShoppingListState, ShoppingListAction } from "./types";
import { Dispatch } from "redux";
import { get_shopping_lists } from "../../services/shoppinglists";

const initialState: ShoppingListState = {
  shopping_lists: null
}

export const shoppinglistReducer = (state: ShoppingListState = initialState, action: ShoppingListAction): ShoppingListState => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, shopping_lists: action.payload }
    default:
      return state
  }
}

export const initialize_shopping_lists = (user_id: number) => {
  return async (dispatch: Dispatch) => {
    const shopping_lists = await get_shopping_lists(user_id)
    dispatch({
      type: "INITIALIZE",
      payload: shopping_lists,
    })
  }
}