import axios from "axios"
import { Store } from "../store/stores/types"
import { API_HOSTNAME } from "./config"

const baseUrl = `http://${API_HOSTNAME}:3001/api/stores`

export const getStores = async (): Promise<Store[]> => {
  return (await axios.get(`${baseUrl}/`)).data
}

export const getStoreById = async (id: number): Promise<Store> => {
  return (await axios.get(`${baseUrl}/${id}`)).data
}