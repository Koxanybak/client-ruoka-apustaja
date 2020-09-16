export interface ProductSearchResult {
  [key: string]: Product[];
}

type ProductError = { message: string; status: number; };

export interface ProductState {
  searchResult: ProductSearchResult | null;
  error: ProductError | null;
}

interface GetSearchResultAction {
  type: "GET_SEARCH_RESULT";
  payload: ProductSearchResult;
}

interface SetErrorAction {
  type: "SET_ERROR";
  payload: ProductError | null;
}

export type ProductAction = GetSearchResultAction | SetErrorAction

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

export interface ProductSearch {
  desc: string;
  id?: number;
  amount?: number;
  unit?: string;
}

export interface SLSearch {
  storeID: number;
  productSearches: Array<ProductSearch>;
}