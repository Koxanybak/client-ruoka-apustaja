import { Store } from "../stores/types"

export interface User {
  id: number;
  username: string;
  token: string;
}


export type FeedbackVariant = "warning" | "danger" | "success"
interface Feedback {
  message: string;
  variant: FeedbackVariant;
}

export interface SystemState {
  logged_user: User | null;
  feedback: Feedback | null;
}

interface SetStoreAction {
  type: "SET_CURRENT_STORE";
  payload: Store;
}

interface SetFeedbackAction {
  type: "SET_FEEDBACK";
  payload: Feedback;
}

interface ClearFeedbackAction {
  type: "CLEAR_FEEDBACK";
}

interface SetLoggedUserAction {
  type: "SET_LOGGED_USER";
  payload: User;
}

export type SystemAction = SetStoreAction | SetLoggedUserAction | SetFeedbackAction | ClearFeedbackAction