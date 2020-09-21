import { Product } from "../products/types";

export type ShoppingListItem = Omit<Product, "storeID">

export interface ShoppingList {
  id: number;
  store_id: number;
  name: string;
  user_id: number;
  productList: ShoppingListItem[] | null;
}

export interface ShoppingListError {
  message?: string;
  status?: number;
}

export interface ShoppingListState {
  shopping_lists: ShoppingList[] | null;
  shopping_list_error?: ShoppingListError;
  current_sl_id: number | null;
}

interface InitializeAction {
  type: "INITIALIZE";
  payload: ShoppingList[];
}

interface CreateShoppingListAction {
  type: "CREATE_SHOPPING_LIST";
  payload: ShoppingList;
}

interface DeleteShoppingListAction {
  type: "DELETE_SHOPPING_LIST";
  payload: number; // shopping list id
}

interface InitializeShoppingListItemsAction {
  type: "INITIALIZE_SHOPPING_LIST_ITEMS";
  payload: {
    id: number;
    items: ShoppingListItem[];
  };
}

interface AddItemAction {
  type: "ADD_ITEM";
  payload: {
    item: ShoppingListItem;
    shopping_list_id: number;
  };
}

interface RemoveItemAction {
  type: "REMOVE_ITEM";
  payload: {
    item_id: number;
    shopping_list_id: number;
  };
}

interface SetCurrentSl {
  type: "SET_CURRENT_SL",
  payload: number | null,
}

interface SetErrorAction {
  type: "SET_SHOPPING_LIST_ERROR";
  payload: ShoppingListError | undefined;
}

export type ShoppingListAction =
  InitializeAction |
  SetErrorAction |
  CreateShoppingListAction |
  DeleteShoppingListAction |
  InitializeShoppingListItemsAction |
  AddItemAction |
  RemoveItemAction |
  SetCurrentSl