import { storeReducer } from "./stores/storeReducer";
import { systemReducer } from "./system/systemReducer";
import { combineReducers } from "redux";
import { productReducer } from "./products/productReducer";
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { shoppinglistReducer } from "./shoppinglists/shoppinglistReducer";

const rootReducer = combineReducers({
  stores: storeReducer,
  system: systemReducer,
  products: productReducer,
  shopping_lists: shoppinglistReducer,
})

export const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk)
)

export type RootState = ReturnType<typeof rootReducer>