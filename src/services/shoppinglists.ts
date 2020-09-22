import axios, { AxiosRequestConfig } from "axios"
import { ShoppingList, ShoppingListItem } from "../store/shoppinglists/types"
import { User } from "../store/system/types"

const get_config = (user: User): AxiosRequestConfig => ({
  withCredentials: true,
  headers: {
    "authorization": `bearer ${user.access_token}`,
  }
})

const get_base_url = (user: User): string => `/api/users/${user.id}/shoppinglists`

export const get_shopping_lists_of_user = async (user: User): Promise<ShoppingList[]> => {
  return (await axios.get(
    get_base_url(user),
    get_config(user)
  )).data
}

export const create_shopping_list_for_user = async (user: User, store_id: number, name?: string,): Promise<ShoppingList> => {
  return (await axios.post(get_base_url(user), { name, store_id, }, get_config(user))).data
}

export const delete_shopping_list_for_user = async (user: User, shopping_list_id: number): Promise<void> => {
  await axios.delete(`${get_base_url(user)}/${shopping_list_id}`, get_config(user))
}

export const add_shopping_list_item_for_user = async (user: User, shopping_list_id: number, item_id: number): Promise<ShoppingListItem> => {
  return (await axios.post(`${get_base_url(user)}/${shopping_list_id}/items`, { id: item_id }, get_config(user))).data
}

export const remove_shopping_list_item_for_user = async (user: User, shopping_list_id: number, item_id: number): Promise<ShoppingListItem> => {
  return await axios.delete(`${get_base_url(user)}/${shopping_list_id}/items/${item_id}`, get_config(user))
}

export const get_shopping_list_items_of_user = async (user: User, shopping_list_id: number): Promise<ShoppingListItem[]> => {
  return (await axios.get(`${get_base_url(user)}/${shopping_list_id}/items`, get_config(user))).data
}