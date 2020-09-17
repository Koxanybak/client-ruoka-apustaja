import axios from "axios"
import { ShoppingList } from "../store/shoppinglists/types"

export const get_shopping_lists = async (user_id: number): Promise<ShoppingList[]> => {
  const baseUrl = `http://localhost:3001/api/users/${user_id}/shoppinglists`
  return (await axios.get(baseUrl, { withCredentials: true })).data
}
