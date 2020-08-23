import { storeReducer } from "./store/storeReducer";
import { systemReducer } from "./system/systemReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  stores: storeReducer,
  system: systemReducer,
})

export type RootState = ReturnType<typeof rootReducer>