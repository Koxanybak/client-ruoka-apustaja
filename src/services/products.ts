import axios from "axios"
import { ProductSearchResult, SLSearch, } from "../store/products/types"

const baseUrl = "http://localhost:3001/api/products"

export const getProductSearch = (searchBody: SLSearch): Promise<ProductSearchResult> => {
  return axios.get(`${baseUrl}/search`, { params: searchBody }).then(res => res.data)
}