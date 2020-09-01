export interface Store {
  id: number;
  name: string;
  city: string;
}

interface GetAllStoresAction {
  type: "GET_ALL_STORES";
  payload: Store[]
}

interface SetCurrentStoreAction {
  type: "SET_CURRENT_STORE";
  payload: Store;
}

export interface StoreState {
  currentStore: Store | null;
  all: Store[];
}

export type StoreAction = GetAllStoresAction | SetCurrentStoreAction