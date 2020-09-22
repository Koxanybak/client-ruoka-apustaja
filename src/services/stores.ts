import axios from "axios"
import { Store } from "../store/stores/types"

const baseUrl = `/api/stores`

export const getStores = async (): Promise<Store[]> => {
  return (await axios.get(`${baseUrl}/`)).data
}

export const getStoreById = async (id: number): Promise<Store> => {
  return (await axios.get(`${baseUrl}/${id}`)).data
}