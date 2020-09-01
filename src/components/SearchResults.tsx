import React from "react"
import { ProductSearchResult } from "../store/products/types"

const SearchResult: React.FC<{ searchResult: ProductSearchResult }> = ({ searchResult }) => {
  return (
    <div className="search-results">
      <li className="search-result-list">
        {Object.keys(searchResult).map((desc, i) => (
          <ul key={i} className="search-result-item">
            <div className="search-result-desc">
              {desc}
            </div>
            {searchResult[desc].map(product => (
              <div key={product.id} className="search-result-product">
                <img src={product.imgSrc} alt="product" className="product-image" />
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
              </div>
            ))}
          </ul>
        ))}
      </li>
    </div>
  )
}

export default SearchResult