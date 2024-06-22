import axios from "axios"
import { baseUrl } from "../utils/key"


export const getBanner =  async () => (
    await axios.get(`${baseUrl}/api/public/get-banner`)
)