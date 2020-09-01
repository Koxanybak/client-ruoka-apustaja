import React from "react"
import { ProductSearchResult } from "../store/products/types"

const SearchResult: React.FC<{ searchResult: ProductSearchResult }> = ({ searchResult }) => {
  return (
    <div>
      <li>
        {Object.keys(searchResult).map((desc, i) => (
          <ul key={i}>
            {desc} {"  "}
            {searchResult[desc].map(product => (
              <div key={product.id}>
                <img src={product.imgSrc} alt="product" />
                <div>{product.name}</div>
                <div>{product.price}</div>
              </div>
            ))}
          </ul>
        ))}
      </li>
    </div>
  )
}

export default SearchResult