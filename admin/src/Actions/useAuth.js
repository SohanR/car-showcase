import axios from "axios";
import { baseUrl } from "../utils/key";

// for log in
export const adminlogin = async (admin) => await axios.post(`${baseUrl}/api/admin/login`, admin,{
    withCredentials: true
}); 