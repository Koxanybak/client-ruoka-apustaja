import { Product } from "../products/types";

export interface ShoppingList {
  id: number;
  store_id: number;
  name: string;
  user_id: number;
  productList: Omit<Product, "storeID">[] | null;
}

interface ShoppingListError {
  message: string;
  status: number;
}

export interface ShoppingListState {
  shopping_lists: ShoppingList[] | null;
  error?: ShoppingListError
}

interface InitializeAction {
  type: "INITIALIZE";
  payload: ShoppingList[];
}

interface SetErrorAction {
  type: "SET_ERROR";
  payload: ShoppingListError | undefined;
}

export type ShoppingListAction = InitializeAction | SetErrorAction