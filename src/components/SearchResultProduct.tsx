import React from "react"
import { createUseStyles } from "react-jss"
import { Product } from "../store/products/types"
import OwnButton from "./OwnButton"

const useStyles = createUseStyles({
  searchResultProduct: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#d2fcfa",
    margin: "0.5em",
    padding: "0.5em",
    width: "200px",
    height: "20em",
    border: "1px solid orange",
    borderRadius: "5px",
    position: "relative",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
  },
})

type Props = {
  product: Product,
}

const SearchResultProduct: React.FC<Props> = ({ product, children }) => {
  const classes = useStyles()

  return (
    <div key={product.id} className={classes.searchResultProduct}>
      <div>
        <img src={product.imgSrc} alt="product" className="product-image" />
      </div>
      <div className={classes.priceContainer}>
        <div className="product-price">{product.price}</div>
      </div>
      <div className="product-name">{product.name}</div>
      <div className={classes.buttonContainer}>
        {children}
      </div>
    </div>
  )
}

export default SearchResultProduct