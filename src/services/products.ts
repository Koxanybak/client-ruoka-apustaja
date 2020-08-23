import axios from "axios"
import { ProductSearchResult, SLSearch, } from "../store/products/types"

const baseUrl = "http://localhost:3001/api/products"

export const getProductSearch = async (searchBody: SLSearch): Promise<ProductSearchResult> => {
  return (await axios.get("/search", { params: searchBody })).data
}