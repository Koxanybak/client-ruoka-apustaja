import axios from "axios"
import { User } from "../store/system/types"

const login_url = "http://localhost:3001/api/login"

export const login = (login_body: { username: string; password: string; }): Promise<User> => {
  return axios.post(login_url, login_body).then(res => {
    return res.data
  })
}