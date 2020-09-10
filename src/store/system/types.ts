import { Store } from "../stores/types"

export interface SystemState {
  currentStore: Store | null;
}

interface SetStoreAction {
  type: string;
  payload: Store;
}

export type SystemAction = SetStoreAction