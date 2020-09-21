import React, { useEffect } from "react"
import { createUseStyles } from "react-jss"
import { useDispatch } from "react-redux"
import { useUser } from "../hooks/use-user"
import { initialize_shopping_list_items } from "../store/shoppinglists/shoppinglistReducer"
import { ShoppingList } from "../store/shoppinglists/types"
import SearchResultProduct from "./SearchResultProduct"

type Props = {
  shopping_list: ShoppingList
}

const useStyles = createUseStyles({
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "stretch",
  },
})

const ShoppingListDetails: React.FC<Props> = ({ shopping_list: { name, productList, id } }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { logged_user } = useUser()

  useEffect(() => {
    if (!productList && logged_user) {
      dispatch(initialize_shopping_list_items(logged_user, id))
    }
  }, [productList, logged_user, dispatch, id])

  console.log("In ShoppingListDetails:", {productList})

  return (
    <div>
      <div>
        {name}
      </div>
      <div className={classes.productContainer}>
        {productList?.map(p => (
          <SearchResultProduct
            product={p}
            key={p.id}
          />
        ))}
      </div>
    </div>
  )
}

export default ShoppingListDetails