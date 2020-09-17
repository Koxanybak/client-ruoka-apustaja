import React, { useEffect } from "react"
import { createUseStyles } from "react-jss"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { initialize_shopping_lists } from "../store/shoppinglists/shoppinglistReducer"
import ErrorComponent from "./ErrorComponent"

const useStyles = createUseStyles({
  hidden: {
    display: "none",
  },
})

const ShoppingLists: React.FC<{ show: boolean }> = ({ show }) => {
  const classes = useStyles()
  const { error, shopping_lists } = useSelector((state: RootState) => state.shopping_lists)
  const user_id = useSelector((state: RootState) => state.system.logged_user?.id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user_id) {
      dispatch(initialize_shopping_lists(user_id))
    }
  }, [dispatch, user_id])
  
  if (!user_id) {
    return (
      <ErrorComponent
        message={"Sinun täytyy kirjautua sisään nähdäksesi ostoslistasi."}
      />
    )
  }

  if (error) {
    return (
      <ErrorComponent
        {...error}
        retry_func={() => dispatch(initialize_shopping_lists(user_id))}
      />
    )
  }

  return (
    <div className={show ? undefined : classes.hidden}>
      {shopping_lists 
        ?
          <ul>
            {shopping_lists.map(sl => (
              <div key={sl.id}>
                {sl.name}
              </div>
            ))}
          </ul>
        :
          <div>
            Ladataan...
          </div>
      }
    </div>
  )
}

export default ShoppingLists