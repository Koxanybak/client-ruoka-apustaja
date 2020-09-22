import axios from "axios"
import { ProductSearchResult, SLSearch, } from "../store/products/types"

const baseUrl = `/api/products`

export const getProductSearch = (searchBody: SLSearch): Promise<ProductSearchResult> => {
  return axios.get(`${baseUrl}/search`, { params: searchBody }).then(res => res.data)
}