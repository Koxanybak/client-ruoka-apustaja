export interface ProductSearchResult {
  [key: string]: Product[];
}

export interface ProductState {
  searchResult: ProductSearchResult | null;
}

interface GetSearchResultAction {
  type: string;
  payload: ProductSearchResult
}

export type ProductAction = GetSearchResultAction

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
  amount?: number;
  unit?: string;
}

export interface SLSearch {
  storeID: number;
  productSearches: Array<ProductSearch>;
}