import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { get_logged_user } from "../store/system/systemReducer"

export const useUser = (options?: { fetch_from_server?: boolean }) => {
  const dispatch = useDispatch()
  const logged_user = useSelector((state: RootState) => state.system.logged_user)
  const user_error = useSelector((state: RootState) => state.system.user_error)
  let user_loading = true

  if (options?.fetch_from_server && !logged_user && !user_error) {
    dispatch(get_logged_user())
  } else {
    user_loading = false
  }

  return { logged_user, user_loading, user_error }
}