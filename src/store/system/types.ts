import { Store } from "../store/types"

export interface SystemState {
  currentStore: Store | null;
}

interface SetStoreAction {
  type: string;
  payload: Store;
}

export type SystemAction = SetStoreAction