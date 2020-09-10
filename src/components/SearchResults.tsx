import React, { useEffect, useMemo } from "react"
import { SLSearch } from "../store/products/types"
import { createUseStyles } from "react-jss"
import qs from "qs"
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getSearchResult } from "../store/products/productReducer"
import { RootState } from "../store"

const useStyles = createUseStyles({
  searchResultList: {
    display: "flex",
    flexDirection: "column",
  },
  searchResultItem: {
    borderStyle: "solid",
    borderWidth: "0.5em",
    borderColor: "#e8ba23",
    borderRadius: "20px",
    padding: "0.5em",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    flexWrap: "no-wrap",
    background: "#fff7e3",
  },
  searchResultProduct: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#d2fcfa",
    margin: "0.5em",
    padding: "0.5em",
    width: "15%",
    height: "20em",
    border: "1px solid orange",
    borderRadius: "5px",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  searchDesc: {
    textAlign: "center"
  },
  productContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "stretch",
  }
})

const SearchResult= () => {
  const classes = useStyles()
  const location = useLocation()
  const search_result = useSelector((state: RootState) => state.products.searchResult)
  const search_obj = useMemo(() => qs.parse(location.search, { ignoreQueryPrefix: true }) as any as SLSearch, [location.search])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSearchResult(search_obj))
  }, [dispatch, search_obj])

  if (!search_result) {
    return null
  }
  console.log(search_result)

  return (
    <div className="search-results">
      <ul className={classes.searchResultList}>
        {Object.keys(search_result).map((desc, i) => (
          <li key={i} className={classes.searchResultItem}>
            <h4 className={classes.searchDesc}>
              &quot;{desc}&quot;
            </h4>
            <div className={classes.productContainer}>
              {search_result[desc].map(product => (
                <div key={product.id} className={classes.searchResultProduct}>
                  <div>
                    <img src={product.imgSrc} alt="product" className="product-image" />
                  </div>
                  <div className={classes.priceContainer}>
                    <div className="product-price">{product.price}</div>
                  </div>
                  <div className="product-name">{product.name}</div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResult