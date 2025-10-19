import axios from "axios"
import "dotenv/config"

const apiKey = process.env.CRYPTO_API_KEY ?? ""
const apiUrl = process.env.CRYPTO_API_URL ?? ""
if (!apiKey || !apiUrl)
  throw new Error("CRYPTO_API_KEY or CRYPTO_API_URL is not defined in env")

const cryptoApi = axios.create({
  baseURL: apiUrl,
  headers: { "x-cg-demo-api-key": apiKey },
})

export const getCoinPrice = async (
  coinId: string,
  currency: string
): Promise<number> => {
  const response = await cryptoApi.get("/simple/price", {
    params: { ids: coinId, vs_currencies: currency },
  })
  return response.data[coinId][currency]
}
