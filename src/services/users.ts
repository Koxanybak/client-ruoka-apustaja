import axios from "axios"
import { User } from "../store/system/types"
import { API_HOSTNAME } from "./config"

const login_url = `http://${API_HOSTNAME}:3001/api/login`

const user_url = `http://${API_HOSTNAME}:3001/api/users`

interface UserBody {
  username: string;
  password: string;
}

export const login = (login_body: UserBody): Promise<User> => {
  return axios.post(login_url, login_body, { withCredentials: true }).then(res => {
    return res.data
  })
}

export const get_user_from_cookie = (): Promise<User> => {
  return axios.get(login_url, { withCredentials: true }).then(res => res.data)
}

export const createUser = (user_body: UserBody): Promise<void> => {
  return axios.post(user_url, user_body)
}