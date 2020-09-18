import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { get_logged_user } from "../store/system/systemReducer"

export const useUser = () => {
  const dispatch = useDispatch()
  const logged_user = useSelector((state: RootState) => state.system.logged_user)
  const user_error = useSelector((state: RootState) => state.system.user_error)
  let user_loading = true

  const has_refresh_token = document.cookie.includes("ruoka_apustaja_refresh_token")
  if (has_refresh_token && !logged_user) {
    dispatch(get_logged_user())
  } else {
    user_loading = false
  }

  return { logged_user, user_loading, user_error }
}