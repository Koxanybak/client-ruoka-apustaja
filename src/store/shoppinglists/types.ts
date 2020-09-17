import { Product } from "../products/types";

export interface ShoppingList {
  id: number;
  store_id: number;
  name: string;
  user_id: number;
  productList: Omit<Product, "storeID">[] | null;
}

export interface ShoppingListState {
  shopping_lists: ShoppingList[] | null;
}

interface InitializeAction {
  type: "INITIALIZE";
  payload: ShoppingList[];
}

export type ShoppingListAction = InitializeAction