import React, { useEffect, useMemo } from "react"
import { Card } from "react-bootstrap"
import { createUseStyles } from "react-jss"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { initialize_shopping_lists, set_current_sl } from "../store/shoppinglists/shoppinglistReducer"
import ErrorComponent from "./ErrorComponent"
import NewShoppingList from "./NewShoppingList"
import ShoppingListDetails from "./ShoppingListDetails"


const useStyles = createUseStyles({
  list_of_shopping_lists: {

  },
  shopping_list: {

  }
})

const ShoppingLists: React.FC<{ hide?: boolean }> = ({ hide }) => {
  const { shopping_lists } = useSelector((state: RootState) => state.shopping_lists)
  const shopping_list_error = useSelector((state: RootState) => state.shopping_lists.shopping_list_error)
  const user = useSelector((state: RootState) => state.system.logged_user)
  const dispatch = useDispatch()
  const classes = useStyles()
  const current_sl_id = useSelector((state: RootState) => state.shopping_lists.current_sl_id)

  const current_sl = useMemo(() => {
    const sl = shopping_lists?.find(sl => sl.id === current_sl_id)
    return sl
  }, [current_sl_id, shopping_lists])

  // get the shopping lists from the server
  useEffect(() => {
    if (user && !shopping_lists) {
      dispatch(initialize_shopping_lists(user))
    }
  }, [dispatch, user, shopping_lists])
  
  // return null if hidden
  if (hide) return null

  // display errors if necessary
  if (!user) {
    return (
      <ErrorComponent
        message={"Sinun täytyy kirjautua sisään nähdäksesi ostoslistasi."}
      />
    )
  }
  if (shopping_list_error) {
    console.log({...shopping_list_error})
    return (
      <ErrorComponent
        message={shopping_list_error.message}
        status={shopping_list_error.status}
        retry_func={() => dispatch(initialize_shopping_lists(user))}
      />
    )
  }

  return (
    <div>
      {shopping_lists
        ?
          <div>
            {current_sl
              ?
                <ShoppingListDetails
                  shopping_list={current_sl}
                />
              :
                <div>
                <NewShoppingList user={user} />
                  <ul className={classes.list_of_shopping_lists}>
                    {shopping_lists.map(sl => (
                      <Card key={sl.id}>
                        <Card.Title onClick={() => dispatch(set_current_sl(sl.id))}>
                          {sl.name}
                        </Card.Title>
                      </Card>
                    ))}
                  </ul>
                </div>
            }
          </div>
        :
          <div>
            Ladataan...
          </div>
      }
    </div>
  )
}

export default ShoppingLists