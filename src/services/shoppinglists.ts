import axios from "axios"
import { ShoppingList } from "../store/shoppinglists/types"
import { User } from "../store/system/types"

export const get_shopping_lists = async (user: User): Promise<ShoppingList[]> => {
  console.log("User data in service:", {user})
  const baseUrl = `http://localhost:3001/api/users/${user.id}/shoppinglists`
  return (await axios.get(
    baseUrl,
    {
      withCredentials: true,
      headers: { "authorization": `bearer ${user.access_token}` },
    }
  )).data
}
