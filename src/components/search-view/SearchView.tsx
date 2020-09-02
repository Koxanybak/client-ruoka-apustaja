import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import ProductSearchForm from "./ProductSearchForm"
import SearchResult from "./SearchResults"

const SearchView = () => {
  const searchResult = useSelector(
    (state: RootState) => state.products.searchResult
  )

  return (
    <div>
      {
        searchResult
          ? <SearchResult searchResult={searchResult} />
          : <ProductSearchForm />
      }
    </div>
  )
}

export default SearchView