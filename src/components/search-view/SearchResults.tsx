import React from "react"
import { ProductSearchResult } from "../../store/products/types"
import { createUseStyles } from "react-jss"

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

const SearchResult: React.FC<{ searchResult: ProductSearchResult }> = ({ searchResult }) => {
  const classes = useStyles()

  return (
    <div className="search-results">
      <ul className={classes.searchResultList}>
        {Object.keys(searchResult).map((desc, i) => (
          <li key={i} className={classes.searchResultItem}>
            <h4 className={classes.searchDesc}>
              &quot;{desc}&quot;
            </h4>
            <div className={classes.productContainer}>
              {searchResult[desc].map(product => (
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