import axios from "axios";
import { baseUrl } from "../utils/key";
axios.defaults.withCredentials = true;
//for login
export const userLogin =  async(info) => await axios.post(`${baseUrl}/api/login/`, info)
//for register
export const userRegister =  async(info) => await axios.post(`${baseUrl}/api/register/`, info)