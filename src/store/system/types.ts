import { Store } from "../stores/types"

export interface User {
  id: number;
  username: string;
  token: string;
}

export interface SystemState {
  currentStore: Store | null;
  logged_user: User | null;
}

interface SetStoreAction {
  type: "SET_CURRENT_STORE";
  payload: Store;
}

interface SetLoggedUserAction {
  type: "SET_LOGGED_USER";
  payload: User;
}

export type SystemAction = SetStoreAction | SetLoggedUserAction