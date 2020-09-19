import { ShoppingListState, ShoppingListAction, ShoppingListError } from "./types";
import { Dispatch } from "redux";
import { User } from "../system/types";
import {
  create_shopping_list_for_user,
  delete_shopping_list_for_user,
  get_shopping_lists_of_user,
  get_shopping_list_items_of_user,
  add_shopping_list_item_for_user,
  remove_shopping_list_item_for_user,
} from "../../services/shoppinglists"
const initialState: ShoppingListState = {
  shopping_lists: null
}

export const shoppinglistReducer = (state: ShoppingListState = initialState, action: ShoppingListAction): ShoppingListState => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, shopping_lists: action.payload }
    case "SET_SHOPPING_LIST_ERROR":
      return { ...state, shopping_list_error: action.payload }
    case "CREATE_SHOPPING_LIST":
      if (!state.shopping_lists) return state
      return {
        ...state,
        shopping_lists: state.shopping_lists.concat(action.payload)
      }
    case "DELETE_SHOPPING_LIST":
      if (!state.shopping_lists) return state
      return {
        ...state,
        shopping_lists: state.shopping_lists.filter(sl => sl.id !== action.payload)
      }
    case "INITIALIZE_SHOPPING_LIST_ITEMS":
      if (!state.shopping_lists) return state
      return {
        ...state,
        shopping_lists: state.shopping_lists.map(sl => (
          sl.id === action.payload.id
            ? { ...sl, productList: action.payload.items }
            : sl
        ))
      }
    case "ADD_ITEM": {
      if (!state.shopping_lists) return state
      return {
        ...state,
        shopping_lists: state.shopping_lists.map(sl => (
          sl.id === action.payload.shopping_list_id
            ? {
              ...sl,
              productList: sl.productList
                ? sl.productList.concat(action.payload.item)
                : [action.payload.item]
            }
            : sl
        )),
      }
    }
    case "REMOVE_ITEM": {
      if (!state.shopping_lists) return state
      return {
        ...state,
        shopping_lists: state.shopping_lists.map(sl => (
          sl.id === action.payload.shopping_list_id
            ? {
              ...sl,
              productList: sl.productList
                ? sl.productList.filter(p => p.id !== action.payload.item_id)
                : sl.productList
            }
            : sl
        )),
      }
    }
    default:
      return state
  }
}

const set_shopping_list_error = (error?: ShoppingListError) => {
  return {
    type: "SET_SHOPPING_LIST_ERROR",
    payload: error,
  }
}

// wrapper that catches errors from the server and handles them
const do_action = async (action: () => Promise<void>, dispatch: Dispatch) => {
  try {
    dispatch(set_shopping_list_error(undefined))
    await action()
  }
  catch (e) {
    dispatch(set_shopping_list_error({
      message: e.response?.data?.error,
      status: e.response?.status,
    }))
  }
}

export const create_shopping_list = (user: User, store_id: number, name?: string) => {
  return async (dispatch: Dispatch) => {
    await do_action(async () => {
      const new_shopping_list = await create_shopping_list_for_user(user, store_id, name)
      dispatch({
        type: "CREATE_SHOPPING_LIST",
        payload: new_shopping_list,
      })
    }, dispatch)
  }
}

export const delete_shopping_list = (user: User, shopping_list_id: number) => {
  return async (dispatch: Dispatch) => {
    await do_action(async () => {
      await delete_shopping_list_for_user(user, shopping_list_id)
      dispatch({
        type: "DELETE_SHOPPING_LIST",
        payload: shopping_list_id,
      })
    }, dispatch)
  }
}

export const initialize_shopping_list_items = (user: User, shopping_list_id: number) => {
  return async (dispatch: Dispatch) => {
    await do_action(async () => {
      const shopping_list_items = await get_shopping_list_items_of_user(user, shopping_list_id)
      dispatch({
        type: "INITIALIZE_SHOPPING_LIST_ITEMS",
        payload: shopping_list_items,
      })
    }, dispatch)
  }
}

export const add_item = (user: User, shopping_list_id: number, item_id: number) => {
  return async (dispatch: Dispatch) => {
    await do_action(async () => {
      const new_item = await add_shopping_list_item_for_user(user, shopping_list_id, item_id)
      dispatch({
        type: "ADD_ITEM",
        payload: {
          shopping_list_id,
          item: new_item,
        },
      })
    }, dispatch)
  }
}

export const remove_item = (user: User, shopping_list_id: number, item_id: number) => {
  return async (dispatch: Dispatch) => {
    await do_action(async () => {
      await remove_shopping_list_item_for_user(user, shopping_list_id, item_id)
      dispatch({
        type: "REMOVE_ITEM",
        payload: {
          shopping_list_id,
          item_id,
        },
      })
    }, dispatch)
  }
}

export const initialize_shopping_lists = (user: User) => {
  return async (dispatch: Dispatch) => {
    await do_action(async () => {
      const shopping_lists = await get_shopping_lists_of_user(user)
      dispatch({
        type: "INITIALIZE",
        payload: shopping_lists,
      })
    }, dispatch)
  }
}