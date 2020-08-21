export interface Store {
  id: number;
  name: string;
  city: string;
}

interface SetStoresAction {
  type: string;
  payload: never
}

export type StoreAction = SetStoresAction

export interface Product {
  id: number;
  name: string;
  price: number;
  pricePerUnit: number | null;
  unit: string | null;
  imgSrc: string;
  storeID: number;
  link: string;
}

export interface ShoppingListResult {
  [key: string]: number | Product[];
}

export interface ProductSearch {
  desc: string[];
  amount?: number;
  unit?: string;
}

export interface SLSearch {
  storeID: number;
  productSearches: Array<ProductSearch>;
}