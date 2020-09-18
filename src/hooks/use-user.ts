import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { get_logged_user } from "../store/system/systemReducer"

export const useUser = () => {
  const dispatch = useDispatch()
  const logged_user = useSelector((state: RootState) => state.system.logged_user)

  if (!logged_user) {
    dispatch(get_logged_user())
  }

  return logged_user
}