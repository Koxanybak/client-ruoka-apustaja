export interface Store {
  id: number;
  name: string;
  city: string;
}

interface UpdateStoresAction {
  type: string;
  payload: Store[]
}

export type StoreAction = UpdateStoresAction