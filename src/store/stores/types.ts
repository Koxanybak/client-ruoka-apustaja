export interface Store {
  id: number;
  name: string;
  city: string;
}

export type StoreErrors = "all" | "current"

interface GetAllStoresAction {
  type: "GET_ALL_STORES";
  payload: Store[]
}

interface SetCurrentStoreAction {
  type: "SET_CURRENT_STORE";
  payload: Store;
}

interface SetErrorAction {
  type: "SET_ERROR",
  payload: { [key in StoreErrors]?: boolean; }
}

export interface StoreState {
  currentStore: Store | null;
  all: Store[];
  errors: { [key in StoreErrors]: boolean; };
}

export type StoreAction = GetAllStoresAction | SetCurrentStoreAction | SetErrorAction