import { storeReducer } from "./stores/storeReducer";
import { systemReducer } from "./system/systemReducer";
import { combineReducers } from "redux";
import { productReducer } from "./products/productReducer";

export const rootReducer = combineReducers({
  stores: storeReducer,
  system: systemReducer,
  products: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>