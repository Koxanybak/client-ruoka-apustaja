import React, { useEffect, useMemo, useState } from "react"
import { SLSearch } from "../store/products/types"
import { createUseStyles } from "react-jss"
import qs from "qs"
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getSearchResult } from "../store/products/productReducer"
import { RootState } from "../store"
import ShoppingLists from "./ShoppingLists"
import ErrorComponent from "./ErrorComponent"
import SearchResultProduct from "./SearchResultProduct"
import { useUser } from "../hooks/use-user"
import { add_item, create_shopping_list } from "../store/shoppinglists/shoppinglistReducer"
import OwnButton from "./OwnButton"

const useStyles = createUseStyles({
  searchResultList: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    height: "100%",
  },
  searchResultItem: {
    padding: "0.5em",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    flexWrap: "no-wrap",
  },
  searchDesc: {
    textAlign: "center"
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "stretch",
  },
  searchResultContainer: {
    display: "flex",
    flexDirection: "row",
  },
  shopping_lists: {
    width: "60%",
  },
  hidden: {
    composes: "$shopping_lists",
    display: "none",
  },
})

const SearchResult= () => {
  const classes = useStyles()
  const location = useLocation()
  const search_result = useSelector((state: RootState) => state.products.searchResult)
  const current_store = useSelector((state: RootState) => state.stores.currentStore)
  const current_sl_id = useSelector((state: RootState) => state.shopping_lists.current_sl_id)
  const error = useSelector((state: RootState) => state.products.error)
  const { logged_user } = useUser()

  // get the query object from the url
  const search_obj = useMemo(() => qs.parse(
    location.search,
    { ignoreQueryPrefix: true }) as any as SLSearch,
    [location.search]
  )
  const dispatch = useDispatch()

  // get the query result from the server
  useEffect(() => {
    dispatch(getSearchResult(search_obj))
  }, [dispatch, search_obj])

  const handle_add_click = async (item_id: number) => {
    if (!logged_user || !current_store) return
    if (!current_sl_id) {
      dispatch(create_shopping_list(logged_user, current_store.id, { set_crnt: true, add_item: item_id }))
    } else {
      dispatch(add_item(logged_user, current_sl_id, item_id))
    }
  }

  return (
    <div className={classes.searchResultContainer}>
      {!error
        ?
          search_result ? <ul className={classes.searchResultList}>
            {Object.keys(search_result).map((desc, i) => (
              <li key={i} className={classes.searchResultItem}>
                <h4 /* className={classes.searchDesc} */>
                  &quot;{desc}&quot;
                </h4>
                <div className={classes.productContainer}>
                  {search_result[desc].map(product => (
                    <SearchResultProduct
                      key={product.id}
                      product={product}
                    >
                      <OwnButton
                        primary
                        onClick={() => handle_add_click(product.id)}
                        disabled={!logged_user}
                      >
                        Ostoslistalle :D
                      </OwnButton>
                    </SearchResultProduct>
                  ))}
                </div>
              </li>
            ))}
          </ul> : null
        :
          <ErrorComponent
            message={error.message}
            status={error.status}
            retry_func={() => dispatch(getSearchResult(search_obj))}
          />
      }
      <div>
        <ShoppingLists
          hide={!current_sl_id}
        />
      </div>
    </div>
  )
}

export default SearchResult