import axios from "axios"
import { environment } from "utils"

const { isDev, port } = environment
// FIX: Erase baseURL hardcode
export default axios.create({
  baseURL: isDev ? `http://localhost:${port}` : "https://mcabsan.dev",
})
